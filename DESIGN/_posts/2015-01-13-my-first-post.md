---
layout: post
title: My First Post
category: design

images:

  - url: http://placekitten.com/g/600/600
    alt: Cypripedium Calceolum
    title: Cypripedium Calceolum

---

This is the excerpt

Post body begin, and first image not in excerpt

{% assign image = page.images[0] %} 
{% include image.html image=image %}