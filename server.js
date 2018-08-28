const { parse } = require('url')
const { send } = require('micro')
const match = require('micro-route/match')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const isCheck = req => match(req, '/check')
const isPost = req => match(req, '/:year/:month/:day/:slug')

// https://github.com/zeit/next.js/tree/66ec2061c1763aa3b52687fd56906d1d039e92b4/examples/custom-server-micro
async function main(req, res) {
  const parsedUrl = parse(req.url, true)

  // routes
  if (isCheck(req)) {
    return send(res, 200)
  }

  const post = isPost(req)
  if (post) {
    const { params, query } = post
    return app.render(req, res, '/blog', Object.assign(params, query))
  }
  return handle(req, res, parsedUrl)
}

async function setup(handler) {
  await app.prepare()
  return handler
}

module.exports = setup(main)
