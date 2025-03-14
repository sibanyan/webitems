---
# index.md
layout: home
title: いろいろやってみる
---

# サービス一覧

{% for item in site.items %}
- <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}
