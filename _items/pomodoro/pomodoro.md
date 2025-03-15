---
layout: item
title: ポモドーロタイマー
stylesheet: style.css
js: 
comment: 
want: ここでできることを理解する(Webアプリ「ポモドーロタイマー」@Layer)[https://pomodoro.lit-gallery.com/]
    設定時間のカスタマイズ
    設定画面を追加して、作業時間や休憩時間をカスタマイズできる
    過去の作業履歴を記録
    ローカルストレージやサーバーに過去の作業履歴を保存して、後で確認できる
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
<script src="pomodoro_js.js"></script>