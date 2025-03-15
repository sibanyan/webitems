document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote");
    const favoriteBtn = document.getElementById("favorite-btn");
    const twitterShare = document.getElementById("twitter-share");
    const favoritesList = document.getElementById("favorites-list");

    let quotes = [];
    let currentQuote = "";

    // 名言をJSONから取得
    async function fetchQuotes() {
        try {
            const response = await fetch("quotes.json");
            quotes = await response.json();
            showNewQuote();
        } catch (error) {
            console.error("名言の取得に失敗しました", error);
        }
    }

    // ランダムに名言を表示
    function showNewQuote() {
        if (quotes.length === 0) return;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.innerText = `"${randomQuote.quote}"`;
        authorText.innerText = `- ${randomQuote.author}`;
        currentQuote = randomQuote;
        updateTwitterShare(randomQuote);
    }

    // お気に入りに追加
    function addToFavorites() {
        if (!currentQuote) return;
        const listItem = document.createElement("li");
        listItem.innerText = `"${currentQuote.quote}" - ${currentQuote.author}`;
        favoritesList.appendChild(listItem);
    }

    // Twitterシェアリンクを更新
    function updateTwitterShare(quote) {
        const text = encodeURIComponent(`"${quote.quote}" - ${quote.author}`);
        twitterShare.href = `https://twitter.com/intent/tweet?text=${text}`;
    }

    newQuoteBtn.addEventListener("click", showNewQuote);
    favoriteBtn.addEventListener("click", addToFavorites);

    fetchQuotes();
});
