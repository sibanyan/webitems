---
layout: item
title: 単位変換ツール
stylesheet: style.css
js: unit_convert_js.js
---
<div class="container">
    <h1>単位変換ツール</h1>
    <div class="converter">
        <label for="unit-type">変換タイプ</label>
        <select id="unit-type">
            <option value="length">長さ</option>
            <option value="weight">重さ</option>
            <option value="temperature">温度</option>
        </select>
    </div>
    <div class="converter">
        <input type="number" id="input-value" placeholder="数値を入力">
        <select id="from-unit"></select>
        <span>→</span>
        <select id="to-unit"></select>
    </div>
    <p>結果: <span id="result">--</span></p>
    <button id="save-conversion">お気に入り保存</button>
    <h2>保存済みの変換</h2>
    <ul id="saved-list"></ul>
</div>