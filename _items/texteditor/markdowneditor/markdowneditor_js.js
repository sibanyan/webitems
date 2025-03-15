document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");
    const saveButton = document.getElementById("save");
    const loadButton = document.getElementById("load");
    const fontSelect = document.getElementById("fontSelect");

    // Markdownをリアルタイムで変換
    function updatePreview() {
        preview.innerHTML = marked.parse(editor.innerText);
    }

    // 入力があるたびにプレビューを更新
    editor.addEventListener("input", updatePreview);

    // 保存機能
    saveButton.addEventListener("click", () => {
        localStorage.setItem("savedMarkdown", editor.innerText);
        alert("保存しました！");
    });

    // 読み込み機能
    loadButton.addEventListener("click", () => {
        const savedText = localStorage.getItem("savedMarkdown");
        if (savedText) {
            editor.innerText = savedText;
            updatePreview();
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
        localStorage.setItem("savedMarkdown", editor.innerText);
    });
});
