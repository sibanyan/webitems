---
layout: item
title: ファイル暗号化ツール(keystore)
stylesheet: style.css
js: encrypt_keystore_js.js
comment: 
want: 
---
<h2>ファイル暗号化ツール</h2>

<label for="fileInput">🔄 暗号化・復号するファイルを選択：</label>
<input type="file" id="fileInput"><br><br>

<label for="passwordInput">🔑 パスワード（またはキーID）：</label>
<input type="password" id="passwordInput"><br><br>

<button id="encryptButton">🔒 暗号化</button>
<button id="decryptButton">🔓 復号</button>
<button id="deleteKeyButton">🗑️ キー削除</button>

<h3>出力ファイル：</h3>
<a id="downloadLink" style="display:none">📥 ダウンロード</a>
