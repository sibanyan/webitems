---
layout: item
title: ポモドーロタイマー
stylesheet: style.css
js: pomodoro_js.js
comment: 
want: ここでできることを理解する(Webアプリ「ポモドーロタイマー」@Layer)[https://pomodoro.lit-gallery.com/]
---
<div class="container">
<h1>ポモドーロタイマー</h1>
<div class="timer">
    <p id="timeDisplay">25:00</p>
    <button id="startStopButton">スタート</button>
    <button id="resetButton">リセット</button>
</div>
<p id="status">作業中</p>
<p id="pomodoroCount">ポモドーロ回数: 0</p>
</div>
<audio id="notification" src="notification.mp3" preload="auto"></audio>