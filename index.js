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
// import htmlMin from 'metalsmith-html-minifier'
import watch from 'metalsmith-watch'
import cheerio from 'cheerio'
import markdown from './plugins/markdown'
import react from './plugins/react'
import webpack from './plugins/webpack'
import replaceUrlsForFeed from './plugins/replaceUrlsForFeed'
import webpackConfig from './webpack.config'
import webpackConfigProd from './webpack.config.prod'

const isProd = process.env.NODE_ENV === 'production'
const options = {
  siteTitle: 'Alessandro Arnodo',
  siteDescription: 'Just another code monkey',
  url: 'https://alessandro.arnodo.net/',
  author: 'Alessandro Arnodo',
  feedPath: 'feed.xml',
  sitemapPath: 'sitemap.xml',
  twitter: '@vesparny',
  disqusSN: 'arnodo',
  segment: 'hhtYU3GWruJZ1URzM1tjwFV7GmtbT2Yu'
}
const m = Metalsmith(__dirname)

m.source('contents')

m.metadata({
  site: options
})

// if isProd it will not start the dev-server, but it will compile the bundle
m.use(webpack({
  config: isProd ? webpackConfigProd : webpackConfig,
  contentBase: path.join(__dirname, 'build'),
  server: !isProd
}))

// watch files for changes
if (!isProd) {
  m.use(watch({
    paths: {
      '${source}/**/*': true,
      'react-layouts/**/*': '**/*'
    },
    livereload: !isProd
  }))
}

m.use(markdown)

m.use(collections({
  posts: {
    pattern: 'posts/*.html',
    sortBy: 'date',
    reverse: true
  }
}))

m.use(permalinks({
  pattern: ':date/:permalink'
}))

m.use(pagination({
  'collections.posts': {
    noPageOne: true,
    first: 'index.html',
    path: 'page/:num/index.html',
    layout: 'Archive',
    perPage: 5
  }
}))

m.use(tags({
  handle: 'tags',
  perPage: 5,
  path: 'tag/:tag/index.html',
  layout: 'Archive',
  sortBy: 'date',
  reverse: true,
  skipMetadata: true
}))

m.use(excerpts())

// compile files to react components
m.use(react({
  reactRender: 'renderToString'
}))

if (isProd) {
  m.use(sitemap({
    output: options.sitemapPath,
    hostname: options.url,
    omitIndex: true
  }))

  m.use(feed({
    collection: 'posts',
    limit: 10,
    destination: options.feedPath,
    title: 'Alessandro Arnodo',
    site_url: 'https://alessandro.arnodo.net/',
    description: 'Alessandro Arnodo',
    postDescription: (file) => {
      const $ = cheerio.load(file.contents)
      return $('[role="main"]').html()
    }
  }))

  m.use(replaceUrlsForFeed({
    url: options.url,
    feedPath: options.feedPath
  }))

  // m.use(htmlMin())
}

m.use(assets({
  source: './assets',
  destination: './'
}))

m.build((err, files) => {
  if (err) {
    if (isProd) {
      process.exit(1)
    }
    throw err
  }
  console.log('\nCompilation succeeded!')
  if (isProd) {
    process.exit(0)
  }
})
