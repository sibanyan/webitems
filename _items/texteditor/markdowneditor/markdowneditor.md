---
layout: item
title: マークダウンエディター
stylesheet: style.css
js: markdowneditor_js.js
comment: 
want: 
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/11.1.0/marked.min.js"></script>
<div class="editor-container">
    <div class="toolbar">
        <button id="save">💾 保存</button>
        <button id="load">📂 読み込み</button>
        <select id="fontSelect">
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
        </select>
    </div>
    <div id="editor" contenteditable="true" class="editor"></div>
    <h3>プレビュー</h3>
    <div id="preview" class="preview"></div>
</div>