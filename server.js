if (process.env.NODE_ENV !== 'production') {
  process.env.NOW_CONFIG = 'local.now.json'
  require('now-env')
}
// eslint-disable-next-line
const { parse } = require('url')
const { send } = require('micro')
const match = require('micro-route/match')
const redirect = require('micro-redirect')
const next = require('next')
const analytics = require('./analytics')()

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const isCheck = req => match(req, '/check')
const isVisit = req => match(req, '/visit')

// https://github.com/snd/url-pattern/issues/24
const isPost = req => match(req, '/writing/:year/:slug(/)')

const redirects = {
  '/2015/01/16/morpheus-is-moving-forward':
    '/writing/2015/morpheus-is-moving-forward',
  '/2015/01/16/morpheus-is-moving-forward/':
    '/writing/2015/morpheus-is-moving-forward',
  '/2015/01/07/introducing-morpheus': '/writing/2015/introducing-morpheus',
  '/2015/01/07/introducing-morpheus/': '/writing/2015/introducing-morpheus',
  '/writing/': '/writing'
}
// https://github.com/zeit/next.js/tree/66ec2061c1763aa3b52687fd56906d1d039e92b4/examples/custom-server-micro
async function main(req, res) {
  const parsedUrl = parse(req.url, true)
  if (redirects[parsedUrl.pathname]) {
    return redirect(
      res,
      301,
      `${redirects[parsedUrl.pathname]}${
        parsedUrl.search ? parsedUrl.search : ''
      }`
    )
  }
  // routes
  if (isCheck(req)) {
    return send(res, 200)
  }
  if (isVisit(req)) {
    analytics.visit(parsedUrl.query.url)
    return send(res, 200, { ok: true })
  }

  const post = isPost(req)
  if (post) {
    const { params, query } = post
    if (parsedUrl.pathname.substr(-1) === '/') {
      return redirect(
        res,
        301,
        `${parsedUrl.pathname.slice(0, -1)}${
          parsedUrl.search ? parsedUrl.search : ''
        }`
      )
    }

    return app.render(req, res, '/writing', { ...params, ...query })
  }
  return handle(req, res, parsedUrl)
}

async function setup(handler) {
  await app.prepare()
  return handler
}

module.exports = setup(main)
