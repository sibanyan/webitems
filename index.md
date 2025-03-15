---
# index.md
layout: home
title: いろいろやってみる
---

# サービス一覧

{% for item in site.items %}
- <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
{% endfor %}


# 一旦放置
- 4. 天気予報表示アプリ (api keyが漏れるため)
- 13. Markdownプレビューアプリ　(text editorの時に少し触ったから)
- 15. シンプルなチャットアプリ (WebSocketサーバ、Firebase Authentication の制限、動的になるので一旦置く)
- 16. ファイル暗号化ツール 暗号化キーの管理（キーストア対応）についてよくわからなかった
- 17. ウェブスクレイピングスクリプト(動的に実施が必要など一旦置く)
