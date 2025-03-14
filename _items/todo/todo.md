---
layout: item
title: ToDoリスト
stylesheet: todo_style.css
js: todo_js.js
---

<div class="container">
    <h1>ToDoリスト</h1>
    <div class="todo-input">
        <input type="text" id="task-input" placeholder="タスクを入力">
        <button id="add-task-btn">追加</button>
    </div>
    <div class="filter">
        <button data-filter="all">すべて</button>
        <button data-filter="active">未完了</button>
        <button data-filter="completed">完了済み</button>
    </div>
    <ul id="task-list"></ul>
</div>