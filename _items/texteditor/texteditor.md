---
layout: item
title: テキストエディター
stylesheet: style.css
js: texteditor_js.js
comment: 
want: 
---
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
</div>