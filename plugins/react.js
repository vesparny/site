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
      const initialState = {
        content: files[file].contents.toString(),
        site: metadata.site,
        title: files[file].title,
        path: files[file].path,
        tags: files[file].tags,
        author: file.author,
        description: files[file].description,
        date: files[file].date
      }
      if (files[file].pagination) {
        initialState['pagination'] = {
          files: files[file].pagination.files.map((file) => {
            return {
              date: file.date,
              path: file.path,
              title: file.title,
              excerpt: file.excerpt,
              tags: file.tags,
              author: file.author
            }
          })
        }
      }
      const rootMarkup = ReactDOMServer[options.reactRender](
        <Component {...initialState} />
      )
      try {
        files[file].contents = new Buffer(
          template.layout({
            rootMarkup,
            initialState
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
