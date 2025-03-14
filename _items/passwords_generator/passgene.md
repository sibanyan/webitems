---
layout: item
title: パスワードジェネレータ
stylesheet: style.css
js: passgene_js.js
---
 <div class="container">
    <h1>パスワードジェネレーター</h1>
    <label for="password-output">生成されたパスワード:</label>
    <textarea id="password-output" rows="5" readonly></textarea>
    <button id="copy">コピー</button>
    <label for="length">長さ:</label>
    <input type="number" id="length" min="4" max="50" value="12">
    <label for="count">生成数:</label>
    <input type="number" id="count" min="1" max="20" value="5">
    <label><input type="checkbox" id="uppercase" checked> 大文字</label>
    <label><input type="checkbox" id="lowercase" checked> 小文字</label>
    <label><input type="checkbox" id="numbers" checked> 数字</label>
    <label><input type="checkbox" id="symbols"> 記号</label>
    <button id="generate">生成</button>
    <p id="strength-message"></p>
</div>