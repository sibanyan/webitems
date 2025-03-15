---
layout: item
title: QRコード生成
stylesheet: style.css
js: qrgene_js.js
comment: 
want: バーコード生成機能（JsBarcode.js などを使用
    ロゴ付きQRコード（canvas にカスタム画像を追加）
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<div class="container">
    <h1>QRコードジェネレーター</h1>
    <input type="text" id="text-input" placeholder="テキストを入力">
    <button id="generate-btn">生成</button>
    <div id="qrcode"></div>
    <button id="download-btn">画像として保存</button>
    <button id="copy-btn">コピー</button>
    <h2>カスタマイズ</h2>
    <label>サイズ: <input type="number" id="size-input" value="200" min="100" max="500"></label>
    <label>色: <input type="color" id="color-input" value="#000000"></label>
</div>