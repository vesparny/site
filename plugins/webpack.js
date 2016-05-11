import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

const debug = require('debug')('dev-server')
const statsConf = {
  colors: true,
  hash: false,
  timings: true,
  chunks: false,
  chunkModules: false,
  modules: false
}
const plugin = function devServer (options) {
  options = {
    port: 3000,
    ...options
  }
  let server
  return function devServer (files, metalsmith, done) {
    if (server) {
      done()
      return
    }
    const compiler = webpack(options.config)
    if (options.server) {
      var webServerConfig = {
        contentBase: options.contentBase,
        publicPath: options.config.output.publicPath,
        stats: statsConf
      }
      server = new WebpackDevServer(compiler, webServerConfig)
      server.listen(options.port)
      debug('==> 🌎 Listening on port %s', options.port)
      done()
    } else {
      // run build
      compiler.run((err, stats) => {
        if (err) {
          return done(err)
        }
        console.log(stats.toString(statsConf))
        done()
      })
    }
  }
}

export default plugin
