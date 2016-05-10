import Post from './Post'
import Page from './Page'
import Archive from './Archive'

const layout = ({ rootMarkup }) => {
  let bundle = {
    js: '/dist/bundle.js',
    css: '/dist/main.css'
  }
  if (process.env.NODE_ENV === 'production') {
    const webpackBuildStats = require('../build/dist/webpack.stats.json')
    bundle.js = `/dist/main-${webpackBuildStats.hash}.min.js`
    bundle.css = `/dist/main-${webpackBuildStats.hash}.min.css`
  }
  return `<!doctype html>
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link href='${bundle.css}' rel='stylesheet' />
        </head>
        <body>
          <div id='root'>
            ${rootMarkup}
          </div>
          <script src='${bundle.js}' />
        </body>
      </html>
    `
}

export default {
  layout,
  Page,
  Post,
Archive}
