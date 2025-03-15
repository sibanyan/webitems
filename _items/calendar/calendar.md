---
layout: item
title: カレンダー
stylesheet: style.css
js: cal_js.js
comment: 
want: Googleカレンダー同期・通知機能
---
<header>
    <h1 id="current-month"></h1>
    <button id="prev-month">＜</button>
    <button id="next-month">＞</button>
</header>

<main>
    <div id="calendar"></div>
</main>

<div id="event-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>イベント追加</h2>
        <input type="date" id="event-date">
        <input type="text" id="event-title" placeholder="イベント名">
        <button id="save-event">保存</button>
    </div>
</div>