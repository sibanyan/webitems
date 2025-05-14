---
layout: item
title: 詳細設計書チェックリスト
stylesheet: style.css
js: 
comment: 
want: 
---
<h2>詳細設計書チェックリスト</h2>
<ol>
    <li>クライアントの要望を満たしているか<input type="checkbox" id="check" name="1"/></li>
    ・文言
    <li>明らかな誤字・脱字がないか　<input type="checkbox" id="check" name="1"/> </li>
    <li>語尾の「です／ます」「である」調が混在していないか<input type="checkbox" id="check" name="1"/> 統一されているか確認
    <li>誤変換がないか<input type="checkbox" id="check" name="1"/> 例：「以外」と「意外」など
    <li>全角/半角の使い分けが統一されているか<input type="checkbox" id="check" name="1"/> 例：全角スペース、記号等
    <li>同義語・類義語の表記ゆれがないか<input type="checkbox" id="check" name="1"/> 例：「ログイン」⇔「サインイン」
    <li>文体が一貫しているか<input type="checkbox" id="check" name="1"/> 口語表現・命令形など
    <li>文法的に不自然な文章がないか<input type="checkbox" id="check" name="1"/>主語・述語の一致など 
    ・図表
    <li>セクション番号、見出し番号のズレがないか<input type="checkbox" id="check" name="1"/> 
    <li>表・箇条書き・インデントのレイアウトが乱れていないか<input type="checkbox" id="check" name="1"/> 視認性の観点も含む
    <li>表記ルールがガイドライン通りか<input type="checkbox" id="check" name="1"/>例：「図」「表」の書き方など 
    ・最終確認
    <li>変更履歴の記入漏れしていないか<input type="checkbox" id="check" name="1"/></li>
    <li>versionはズレていないか<input type="checkbox" id="check" name="1"/></li>
    ・追加要素
    <li>改行や空白のミス（不要な改行、抜け）がないか<input type="checkbox" id="check" name="1"/> MarkdownやPDF化時に影響
    <li>UIのラベルやエラーメッセージが実装と一致しているか<input type="checkbox" id="check" name="1"/> 実装と齟齬がないか
    <li>単位や数値の表記（MB / mb / メガバイトなど）が統一されているか<input type="checkbox" id="check" name="1"/> 	
    <li>専門用語・固有名詞が正確に記載されているか<input type="checkbox" id="check" name="1"/> 
</ol>

<h3>レビュー観点テンプレート（詳細設計書用）</h3>
<ol>
    <li>1. 目的・概要の妥当性</li>
        本資料の目的が明確に記述されているか
        システム全体の中での位置づけがわかるか
    <li> 機能単位の設計観点</li>
        各機能の入力・出力仕様が明確に定義されているか
        異常系（エラー処理）まで記載されているか
        UI仕様（必要な場合）が明確か
        APIや外部IFとの連携仕様が過不足なく記述されているか
    <li>非機能要件・制約</li>
        性能要件（レスポンス時間、同時接続数など）が記載されているか
        セキュリティ要件が明記されているか
        対応ブラウザ・デバイス・OSのバージョン等が明記されているか
    <li>整合性チェック</li>
        他資料との整合性（基本設計書、要件定義書）に齟齬がないか
        開発チームとの実装見積もりやスコープにズレがないか
    <li>文書品質の観点</li>
        文書構成が見やすく整理されているか（章立て、番号付けなど）
        表記・用語が統一されているか（プロジェクト用語集と一致しているか）
        日本語として読みやすく、不明瞭な表現がないか
        図表・コード・レイアウトの整形が適切か
    <li>レビューメモ</li>
        [自由記述欄：レビュー時の指摘事項、質問、要望など記入]
</ol>
