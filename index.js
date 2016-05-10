import path from 'path'
import Metalsmith from 'metalsmith'
import assets from 'metalsmith-assets'
import permalinks from 'metalsmith-permalinks'
import collections from 'metalsmith-collections'
import pagination from 'metalsmith-pagination'
import excerpts from 'metalsmith-better-excerpts'
import tags from 'metalsmith-tags'
import sitemap from 'metalsmith-sitemap'
import feed from 'metalsmith-feed'
import htmlMin from 'metalsmith-html-minifier'
import watch from 'metalsmith-watch'
import markdown from './plugins/markdown'
import react from './plugins/react'
import webpack from './plugins/webpack'
import webpackConfig from './webpack.config'
import webpackConfigProd from './webpack.config.prod'

const isProd = process.env.NODE_ENV === 'production'

Metalsmith(__dirname)
  .source('contents')
  .destination('build')
  .metadata({
    site: {
      title: 'Alessandro Arnodo',
      url: 'https://alessandro.arnodo.net',
      author: 'Alessandro Arnodo'
    }
  })
  .use(webpack({
    config: isProd ? webpackConfigProd : webpackConfig,
    contentBase: path.join(__dirname, 'build'),
    server: !isProd
  }))
  .use(watch({
    paths: {
      '${source}/**/*': true,
      'react-layouts/**/*': '**/*'
    }
  }))
  .use(markdown)
  .use(collections({
    posts: {
      pattern: 'posts/*.html',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(permalinks({
    pattern: ':date/:permalink'
  }))
  .use(pagination({
    'collections.posts': {
      noPageOne: true,
      first: 'index.html',
      path: 'page/:num/index.html',
      layout: 'Archive',
      perPage: 5
    }
  }))
  .use(tags({
    handle: 'tags',
    perPage: 5,
    path: 'tag/:tag/index.html',
    layout: 'Archive',
    sortBy: 'date',
    reverse: true,
    skipMetadata: true
  }))
  .use(excerpts())
  .use(react({
    reactRender: 'renderToString'
  }))
  .use(sitemap({
    hostname: 'https://alessandro.arnodo.net'
  }))
  .use(feed({
    collection: 'posts',
    destination: 'rss/index.html'
  }))
  .use(assets({
    source: './assets',
    destination: './'
  }))
  .use(htmlMin())
  .build((err, files) => {
    if (err) {
      throw err
    }
    if (isProd) process.exit(0)
    // Object.keys(files).forEach((file) => console.log(file + '\n'))
  })

  // http://brage.switchbit.io/
  // prod build
  // keen
  // disqus
  // favicon tipo zack
  // 404
