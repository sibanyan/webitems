document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const tagsInput = document.getElementById("tags");
    const contentInput = document.getElementById("content");
    const saveButton = document.getElementById("save-article");
    const articleList = document.getElementById("article-list");
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-btn");
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

    function loadArticles() {
        articleList.innerHTML = "";
        const articles = JSON.parse(localStorage.getItem("articles")) || [];
        articles.forEach((article, index) => {
            const li = document.createElement("li");
            li.classList.add("article-item");
            li.innerHTML = `<h3>${article.title}</h3>
                            <p><strong>タグ:</strong> ${article.tags.join(", ")}</p>
                            <div>${marked.parse(article.content)}</div>`;
            articleList.appendChild(li);
        });
    }

    saveButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const tags = tagsInput.value.split(",").map(tag => tag.trim());
        const content = contentInput.value.trim();
        if (!title || !content) {
            alert("タイトルと内容は必須です");
            return;
        }
        const articles = JSON.parse(localStorage.getItem("articles")) || [];
        articles.push({ title, tags, content });
        localStorage.setItem("articles", JSON.stringify(articles));
        titleInput.value = "";
        tagsInput.value = "";
        contentInput.value = "";
        loadArticles();
    });

    searchButton.addEventListener("click", () => {
        const query = searchBox.value.toLowerCase();
        const articles = JSON.parse(localStorage.getItem("articles")) || [];
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.content.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query))
        );
        articleList.innerHTML = "";
        filteredArticles.forEach((article) => {
            const li = document.createElement("li");
            li.classList.add("article-item");
            li.innerHTML = `<h3>${article.title}</h3>
                            <p><strong>タグ:</strong> ${article.tags.join(", ")}</p>
                            <div>${marked.parse(article.content)}</div>`;
            articleList.appendChild(li);
        });
    });

    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    loadArticles();
});
