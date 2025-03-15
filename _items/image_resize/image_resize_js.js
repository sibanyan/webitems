document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("image-input");
    const dropZone = document.getElementById("drop-zone");
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const resizeBtn = document.getElementById("resize-btn");
    const downloadBtn = document.getElementById("download-btn");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    let image = new Image();

    function loadImage(file) {
        if (!file.type.startsWith("image/")) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            image.onload = () => {
                widthInput.value = image.width;
                heightInput.value = image.height;
            };
            image.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    imageInput.addEventListener("change", (event) => {
        if (event.target.files.length > 0) {
            loadImage(event.target.files[0]);
        }
    });

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.style.backgroundColor = "#eee";
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.style.backgroundColor = "";
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.style.backgroundColor = "";
        if (event.dataTransfer.files.length > 0) {
            loadImage(event.dataTransfer.files[0]);
        }
    });

    resizeBtn.addEventListener("click", () => {
        if (!image.src) return alert("画像を選択してください");

        const newWidth = parseInt(widthInput.value, 10);
        const newHeight = parseInt(heightInput.value, 10);

        if (newWidth <= 0 || newHeight <= 0) return alert("幅と高さを正しく入力してください");

        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        
        downloadBtn.style.display = "block";
    });

    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.download = "resized-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
