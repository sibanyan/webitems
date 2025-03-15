---
layout: item
title: 画像リサイズ
stylesheet: style.css
js: image_resize_js.js
comment: 
want: 複数画像の一括リサイズ
    input の multiple 属性を活用し、ループ処理で canvas に描画
    PNG⇄JPG変換
    canvas.toDataURL("image/jpeg", 0.8) に変更すればJPEGで保存可能
---
<h1>画像リサイズツール</h1>

<div class="upload-area" id="drop-zone">
    <input type="file" id="image-input" accept="image/*">
    <p>またはここに画像をドラッグ＆ドロップ</p>
</div>

<div class="controls">
    <label>幅: <input type="number" id="width" min="1"></label>
    <label>高さ: <input type="number" id="height" min="1"></label>
    <button id="resize-btn">リサイズ</button>
</div>

<div class="preview">
    <canvas id="canvas"></canvas>
</div>

<button id="download-btn" style="display: none;">ダウンロード</button>
