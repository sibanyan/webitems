---
layout: item
title: タイマー & ストップウォッチ
stylesheet: style.css
js: stopwatch_js.js
---
<div class="container">
    <h1>タイマー & ストップウォッチ</h1>
    <div class="section">
        <h2>タイマー</h2>
        <input type="number" id="timer-minutes" min="0" placeholder="分数を入力">
        <button id="start-timer">開始</button>
        <button id="stop-timer">停止</button>
        <button id="reset-timer">リセット</button>
        <p id="timer-display">00:00</p>
    </div>
    <div class="section">
        <h2>ストップウォッチ</h2>
        <button id="start-stopwatch">開始</button>
        <button id="stop-stopwatch">停止</button>
        <button id="reset-stopwatch">リセット</button>
        <button id="lap-stopwatch">ラップ</button>
        <p id="stopwatch-display">00:00:00</p>
        <ul id="lap-times"></ul>
    </div>
</div>