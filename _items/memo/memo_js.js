document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const saveBtn = document.getElementById("saveBtn");
    const memoList = document.getElementById("memoList");

    let memos = JSON.parse(localStorage.getItem("memos")) || [];

    function renderMemos() {
        memoList.innerHTML = "";
        memos.forEach((memo, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div>
                    <strong>${memo.title}</strong>
                    <p>${memo.content}</p>
                </div>
                <div class="memo-buttons">
                    <button onclick="editMemo(${index})">編集</button>
                    <button onclick="deleteMemo(${index})">削除</button>
                </div>
            `;
            memoList.appendChild(li);
        });
    }

    function saveMemo() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        if (title === "" || content === "") return;

        memos.push({ title, content });
        localStorage.setItem("memos", JSON.stringify(memos));
        titleInput.value = "";
        contentInput.value = "";
        renderMemos();
    }

    window.deleteMemo = function(index) {
        memos.splice(index, 1);
        localStorage.setItem("memos", JSON.stringify(memos));
        renderMemos();
    };

    window.editMemo = function(index) {
        const memo = memos[index];
        titleInput.value = memo.title;
        contentInput.value = memo.content;
        deleteMemo(index);
    };

    saveBtn.addEventListener("click", saveMemo);
    renderMemos();
});
