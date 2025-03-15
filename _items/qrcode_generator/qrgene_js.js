document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const generateBtn = document.getElementById("generate-btn");
    const downloadBtn = document.getElementById("download-btn");
    const copyBtn = document.getElementById("copy-btn");
    const sizeInput = document.getElementById("size-input");
    const colorInput = document.getElementById("color-input");
    const qrContainer = document.getElementById("qrcode");

    let qr;

    function generateQRCode() {
        qrContainer.innerHTML = "";
        let text = textInput.value.trim();
        let size = parseInt(sizeInput.value, 10);
        let color = colorInput.value;

        if (!text) return;

        qr = new QRCode(qrContainer, {
            text: text,
            width: size,
            height: size,
            colorDark: color,
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    function downloadQRCode() {
        if (!qr) return;
        const canvas = qrContainer.querySelector("canvas");
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    }

    function copyQRCode() {
        if (!qr) return;
        const canvas = qrContainer.querySelector("canvas");
        canvas.toBlob(blob => {
            navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]).then(() => alert("QRコードをコピーしました！"));
        });
    }

    generateBtn.addEventListener("click", generateQRCode);
    downloadBtn.addEventListener("click", downloadQRCode);
    copyBtn.addEventListener("click", copyQRCode);
});
