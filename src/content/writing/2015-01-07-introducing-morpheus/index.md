---
author: 'Alessandro Arnodo'
twitter: 'vesparny'
avatarUrl: 'https://s.gravatar.com/avatar/b191979120db1749f5f8c8cadc2ac4a9?s=24'
date: '2015-01-07T15:49:16.408Z'
title: 'Introducing morpheus'
description: 'A gentle introduction to Morpheus, the very first isomorphic web publishing platform'
categories: ['react']
keywords: ['react']
---

---

** UPDATE: See the new features **

---

The world has plenty of CMS and blogging platforms, so why another one?

**because Morpheus is the first [universal](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) open-source web publishing platform, and it's built with react and flux.**

Checkout the source code [here](https://github.com/vesparny/morpheus).

### Reasons behind Morpheus

At the time being, developers build entire web applications using JavaScript. The big part of the logic lives the client and it generally communicates to the server via an API.

Once the application is fully loaded, the user can gain a good experience navigating between pages without the need of fullpage reload.

This is good, but what happens when your website is run by a crawler (google bot or the likes)? If the website can only be executed on the client it won't be able to serve HTML to crawlers, and this will have negative impacts on SEO.

This is why Morpheus is totally rendered on the server during the first load. Once done, React will attach events to the DOM, and the user will feel the benefits of a single page application, without having to wait for tedious spinners before seeing the content.

THATS GREAT

What happens if you disable JavaScript on your browser?

Let's try, and this website will still work :)

### Features

- Post and pages rendering with markdown and posts pagination.
- Server side rendering.
- Commenting with [Disqus](https://disqus.com/).
- Configurable permalinks.
- Fully working default theme (it's called **blablabla**)

**Updates:**

- RSS support.

### What's next?

Morpheus is in its very early stages, and it isn’t pretty. **It is far from usable.** Set it up only if you know what you’re doing, and expect it to break a lot.

### Run it

It's very easy to get started with Morpheus, checkout the [README file](https://github.com/vesparny/morpheus#readme) for further details.

My website is built with Morpheus and it's hosted on OpenShift, a more detailed post on how I deployed it will follow.

Find below the Morpheus config file I'm using in production.

```javascript
'use strict'

var path = require('path')

module.exports = {
  log: {
    level: 'error',
    file: path.resolve(process.env.OPENSHIFT_DATA_DIR || '', 'log.log')
  },
  debug: false,
  siteUrl: 'https://arnodo.net',
  useSSL: true,
  port: process.env.OPENSHIFT_NODEJS_PORT || 3000,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  disqusComments: 'arnodo',
  siteTitle: 'Alessandro Arnodo',
  siteDescription: '- Just another code monkey -'
}
```

Stay tuned ;)
