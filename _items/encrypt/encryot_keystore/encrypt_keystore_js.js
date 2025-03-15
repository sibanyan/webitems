document.getElementById("encryptButton").addEventListener("click", encryptFile);
document.getElementById("decryptButton").addEventListener("click", decryptFile);
document.getElementById("deleteKeyButton").addEventListener("click", deleteKeyHandler);

async function generateKey() {
    return crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

async function encryptFile() {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("ファイルを選択してください！");

    const key = await generateKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const keyId = crypto.getRandomValues(new Uint8Array(8)).join('');

    const reader = new FileReader();
    reader.onload = async function(event) {
        const encryptedData = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv }, key, event.target.result
        );

        const exportedKey = await crypto.subtle.exportKey("raw", key);
        await saveKey(keyId, exportedKey);

        const combined = new Uint8Array(iv.length + encryptedData.byteLength);
        combined.set(iv, 0);
        combined.set(new Uint8Array(encryptedData), iv.length);

        downloadFile(combined, file.name + ".enc");

        alert(`暗号化完了！キーID: ${keyId} を保存しました。`);
    };
    reader.readAsArrayBuffer(file);
}

async function decryptFile() {
    const file = document.getElementById("fileInput").files[0];
    const keyId = document.getElementById("passwordInput").value;
    if (!file || !keyId) return alert("ファイルとキーIDを入力してください！");

    const storedKeyData = await getKey(keyId);
    if (!storedKeyData) return alert("指定したキーIDが見つかりません！");

    const key = await crypto.subtle.importKey(
        "raw", storedKeyData, { name: "AES-GCM" }, true, ["decrypt"]
    );

    const reader = new FileReader();
    reader.onload = async function(event) {
        const data = new Uint8Array(event.target.result);
        const iv = data.slice(0, 12);
        const encryptedData = data.slice(12);

        try {
            const decryptedData = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv: iv }, key, encryptedData
            );
            downloadFile(new Uint8Array(decryptedData), file.name.replace(".enc", ""));
        } catch (e) {
            alert("復号に失敗しました。キーIDが間違っている可能性があります。");
        }
    };
    reader.readAsArrayBuffer(file);
}

async function deleteKeyHandler() {
    const keyId = document.getElementById("passwordInput").value;
    if (!keyId) return alert("削除するキーIDを入力してください！");
    await deleteKey(keyId);
}

function downloadFile(data, filename) {
    const blob = new Blob([data]);
    const link = document.getElementById("downloadLink");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = "block";
    link.textContent = `📥 ${filename} をダウンロード`;
}


const dbName = "KeyStoreDB";
const storeName = "keys";

async function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (event) => {
            event.target.result.createObjectStore(storeName);
        };
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

async function saveKey(id, key) {
    const db = await openDB();
    const transaction = db.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).put(key, id);
}

async function getKey(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const request = db.transaction(storeName).objectStore(storeName).get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function deleteKey(id) {
    const db = await openDB();
    const transaction = db.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).delete(id);
    alert(`キーID: ${id} を削除しました。`);
}
