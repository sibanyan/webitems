---
# index.md
layout: home
title: いろいろやってみる
---

# サービス一覧
{% for page in site.pages %}
- [{{ page.title }}]({{ page.url }})
{% endfor %}