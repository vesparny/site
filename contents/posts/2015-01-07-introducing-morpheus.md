---
author: Alessandro Arnodo
email: alessandro@arnodo.net
tags:
- Morpheus
- ca
permalink: introducing-morpheus
title: Introducing morpheus
date: 2015-01-07 15:00:00
description : A gentle introduction to Morpheus, the very first isomorphic web publishing platform
template: Post
---

**UPDATE: See the features section for last added functionalities.**
___

The world have plenty of cms, blogging platform and web publishing platform, so why another one?

**because Morpheus is the first [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) open-source web publishing platform, and it's built with react and flux.**

Chekout the source code [here](https://github.com/vesparny/morpheus).

### Reasons behind Morpheus

At the time being, developers are building entire applications in the browser using JavaScript. The big part of the logic is living on the client and it talks to the server to an API.

Once the application is fully loaded, the user can gain a good experience navigating between pages without the need of fully reloading each time.

This is good, what happens when your website is run by a crawler (google bot or whatever)? If the website can only be executed on the client it won't be able to serve HTML to crawlers, and this will have negative impacts on SEO.

This is why Morpheus is totally rendered on the server on the first load. Once done, React will attach events to the DOM, and the user will feel the benefits of a single page application, without having to wait for tedious spinners before seeing the content.

THATS GREAT

What happens if you disable JavaScript on your browser?

Let's try, and this website will still work.

### Features

- [x] Post and pages displaying, markdown render, posts pagination.
- [x] Server side rendering.
- [x] Comments managed with [Disqus](https://disqus.com/).
- [x] Configurable permalinks.
- [x] Fully working default theme (it's called **blablabla**)

**Updates:**

- [x] RSS support.



### What's next?

Morpheus is in its very early stages, and it isn’t pretty. **It is far from usable.** Set it up only if you know what you’re doing, and expect it to break a lot.

### Run it

It's very easy to get started with Morpheus, checkout the [README file](https://github.com/vesparny/morpheus#readme) for further details.

My website is running with Morpheus and it's hosted on OpenShift, a more detailed post on how I deployed it will follow.

Find below the Morpheus config file I'm using in production.

```javascript
'use strict';

var path = require('path');

module.exports = {
  log: {
    level: 'error',
    file: path.resolve(process.env.OPENSHIFT_DATA_DIR || '', 'log.log'),
  },
  debug: false,
  siteUrl: 'https://alessandro.arnodo.net',
  useSSL: true,
  port: process.env.OPENSHIFT_NODEJS_PORT || 3000,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  disqusComments: 'arnodo',
  siteTitle: 'Alessandro Arnodo',
  siteDescription: '- Just another code monkey -',
};
```

Stay tuned ;)
