---
layout: item
title: ブログフプラットフォーム
stylesheet: style.css
js: blog_js.js
comment: 
want: 
---
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<header>
    <h1>Markdownブログ</h1>
    <button id="toggle-dark-mode">🌙 ダークモード</button>
</header>

<main>
    <section id="editor">
        <h2>記事を書く</h2>
        <input type="text" id="title" placeholder="タイトル">
        <input type="text" id="tags" placeholder="タグ（カンマ区切り）">
        <textarea id="content" placeholder="Markdown形式で入力"></textarea>
        <button id="save-article">保存</button>
    </section>
    <section id="search">
        <h2>記事検索</h2>
        <input type="text" id="search-box" placeholder="キーワード検索">
        <button id="search-btn">検索</button>
    </section>
    <section id="articles">
        <h2>記事一覧</h2>
        <ul id="article-list"></ul>
    </section>
</main>
