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
      const layouts = require(metalsmith.path(path.join(
        options.layoutsPath,
        'layouts'
      ))).default
      const Component = layouts[files[file].layout || options.defaultLayout]
      const initialState = {
        content: files[file].contents.toString(),
        site: metadata.site,
        title: files[file].title,
        path: files[file].path,
        tags: files[file].tags,
        author: files[file].author,
        description: files[file].description,
        date: files[file].date,
        layout: files[file].layout || options.defaultLayout,
        permalink: files[file].permalink
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
              author: file.author,
              layout: file.layout || options.defaultLayout,
              permalink: file.permalink
            }
          })
        }
      }
      const rootMarkup = ReactDOMServer[options.reactRender](
        <Component {...initialState} />
      )
      try {
        const createHTML = require(metalsmith.path(path.join(
          options.layoutsPath,
          'createHTML'
        ))).default
        files[file].contents = new Buffer(
          createHTML({
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
