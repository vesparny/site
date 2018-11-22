---
author: 'me'
twitter: 'wwwnet'
avatarUrl: ''
date: '2019-07-13T03:49:16.408Z'
title: 'My firrst post'
description: 'My first description'
categories: ['react']
keywords: ['react']
---

The last week has been very exciting for me.
I tweeted about **Morphues** and wrote [some words](https://arnodo.net/2015/01/07/introducing-morpheus) about it and the buzz started pretty fast.

Even though the project is far from its first stable release, I received a lot of questions about the project and its state.

> This is the best thing ever for a guy who likes to spend time open-sourcing code :)

Morpheus has been featured on:

- [JavaScript Weekly](http://javascriptweekly.com/issues/214)
- [Node Weekly](http://nodeweekly.com/issues/68)
- [React Rocks](http://react.rocks/example/morpheus)

In these last few days I concentrated on solving some [issues](https://github.com/vesparny/morpheus/issues?q=is%3Aissue+is%3Aclosed) and developing new features.

### RSS

Morpheus has now RSS support for blog entries, everything works out of the box. Add this [website](https://arnodo.net/rss/) to your feed reader for a try.

## Open Graph

Morpheus supports now Meta tags for Open Graph.
This means that any of your posts shared on Social Network will now have rich content associated.

![Open graph](screenshot.png)

### Google Analytics

A custom google analytics component has been added, you can track page visits now, just adding your tracking code in the configuration file.

### Next steps

---

#### Split the monolith

The much more important thing is to rethink Morpheus architecture.
The application has now a monolithic structure, and the idea is to split it in some npm modules, and give each of them less responsibilities.
This way the core will be easier to be maintained.

#### Yeoman generator

The installation process should be as easy as possible, this is why I'm thinking about creating a Yeoman module for installing Morpheus.

### Help Morpheus

I have a lot of [ideas](https://github.com/vesparny/morpheus/issues), but I've been alone in this adventure so far.

If you want to contribute with ideas or code, you are more than welcome!

Should you have any thoughts, you know how to reach out to me, I'm here waiting for wise suggestions 😀
