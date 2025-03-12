# index.md
---
layout: default
title: サービス一覧
---

# サービス一覧
{% for page in site.pages %}
- [{{ page.title }}]({{ page.url }})
{% endfor %}