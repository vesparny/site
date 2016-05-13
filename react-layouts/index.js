import Helmet from 'react-helmet'
import Post from './Post'
import Page from './Page'
import Archive from './Archive'
import NotFound from './NotFound'
import { getAbsoluteURL } from './utils'

const layout = ({ rootMarkup, initialState }) => {
  const head = Helmet.rewind()
  let bundle = {
    js: getAbsoluteURL('dist/bundle.js'),
    css: getAbsoluteURL('dist/main.css')
  }
  if (process.env.NODE_ENV === 'production') {
    const webpackBuildStats = require('../build/dist/webpack.stats.json')
    bundle.js = getAbsoluteURL(`dist/main-${webpackBuildStats.hash}.min.js`)
    bundle.css = getAbsoluteURL(`dist/main-${webpackBuildStats.hash}.min.css`)
  }
  return `<!doctype html>
      <html ${head.htmlAttributes.toString()}>
        <head>
           ${head.meta.toString()}
           ${head.title.toString()}
           ${head.link.toString()}
          <link href='${bundle.css}' rel='stylesheet' />
        </head>
        <body>
          <div id='root'>${rootMarkup}</div>
          <script>
            window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
          </script>
          <script src="${bundle.js}" type="text/javascript"></script>
        </body>
      </html>
    `
}

export default {
  layout,
  Page,
  Post,
  Archive,
  NotFound
}
