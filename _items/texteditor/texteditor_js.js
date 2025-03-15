document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const saveButton = document.getElementById("save");
    const loadButton = document.getElementById("load");
    const fontSelect = document.getElementById("fontSelect");

    // 保存機能
    saveButton.addEventListener("click", () => {
        localStorage.setItem("savedText", editor.innerHTML);
        alert("保存しました！");
    });

    // 読み込み機能
    loadButton.addEventListener("click", () => {
        const savedText = localStorage.getItem("savedText");
        if (savedText) {
            editor.innerHTML = savedText;
        } else {
            alert("保存されたデータがありません。");
        }
    });

    // フォント変更機能
    fontSelect.addEventListener("change", () => {
        editor.style.fontFamily = fontSelect.value;
    });

    // 自動保存機能（拡張）
    editor.addEventListener("input", () => {
        localStorage.setItem("savedText", editor.innerHTML);
    });
});
