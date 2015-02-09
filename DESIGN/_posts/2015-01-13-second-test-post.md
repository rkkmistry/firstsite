---
layout: post
title: My Second Post
category: design

images:

  - url: http://placekitten.com/g/600/600
    alt: Cypripedium Calceolum
    title: Cypripedium Calceolum

---

Intro here yo ! <-- THIS IS THE EXCERPT

Post body begin, and first image not in excerpt
{% assign image = page.images[0] %} <-- first element of the array is zero
{% include image.html image=image %}