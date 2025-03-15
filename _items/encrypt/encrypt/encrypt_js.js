document.getElementById("encryptButton").addEventListener("click", encryptFile);
document.getElementById("decryptButton").addEventListener("click", decryptFile);

async function deriveKey(password, salt, keyLength) {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        "raw", encoder.encode(password), { name: "PBKDF2" }, false, ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: salt, iterations: 100000, hash: "SHA-256" },
        keyMaterial, { name: "AES-GCM", length: keyLength }, true, ["encrypt", "decrypt"]
    );
}

async function encryptFile() {
    const file = document.getElementById("fileInput").files[0];
    const password = document.getElementById("passwordInput").value;
    if (!file || !password) return alert("ファイルとパスワードを入力してください！");

    const reader = new FileReader();
    reader.onload = async function(event) {
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const key = await deriveKey(password, salt, 256);

        const encryptedData = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv }, key, event.target.result
        );

        const combined = new Uint8Array(salt.length + iv.length + encryptedData.byteLength);
        combined.set(salt, 0);
        combined.set(iv, salt.length);
        combined.set(new Uint8Array(encryptedData), salt.length + iv.length);

        downloadFile(combined, file.name + ".enc");
    };
    reader.readAsArrayBuffer(file);
}

async function decryptFile() {
    const file = document.getElementById("fileInput").files[0];
    const password = document.getElementById("passwordInput").value;
    if (!file || !password) return alert("ファイルとパスワードを入力してください！");

    const reader = new FileReader();
    reader.onload = async function(event) {
        const data = new Uint8Array(event.target.result);
        const salt = data.slice(0, 16);
        const iv = data.slice(16, 28);
        const encryptedData = data.slice(28);

        const key = await deriveKey(password, salt, 256);
        
        try {
            const decryptedData = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv: iv }, key, encryptedData
            );
            downloadFile(new Uint8Array(decryptedData), file.name.replace(".enc", ""));
        } catch (e) {
            alert("復号に失敗しました。パスワードが間違っている可能性があります。");
        }
    };
    reader.readAsArrayBuffer(file);
}

function downloadFile(data, filename) {
    const blob = new Blob([data]);
    const link = document.getElementById("downloadLink");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = "block";
    link.textContent = `📥 ${filename} をダウンロード`;
}
