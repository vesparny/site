import React from 'react'
import ReactDOMServer from 'react-dom/server'
import multimatch from 'multimatch'
import path from 'path'

const plugin = function reactTpls (options) {
  options = {
    defaultLayout: 'Page',
    layoutsPath: 'react-layouts',
    pattern: '**/*.html',
    reactRender: 'renderToStaticMarkup',
    ...options
  }
  return function (files, metalsmith, done) {
    const metadata = metalsmith.metadata()
    const matched = multimatch(Object.keys(files), options.pattern) || []
    matched.forEach((file) => {
      const template = require(metalsmith.path(path.join(
        options.layoutsPath
      ))).default
      const Component = template[files[file].layout || options.defaultLayout]

      const rootMarkup = ReactDOMServer[options.reactRender](
        <Component
          body={files[file].contents.toString()}
          {...files[file]}
          {...metadata} />
      )
      try {
        files[file].contents = new Buffer(
          template.layout({
            rootMarkup
          })
        )
      } catch (err) {
        done(err)
      }
    })
    done()
  }
}

export default plugin
