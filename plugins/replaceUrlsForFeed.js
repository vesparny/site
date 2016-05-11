const plugin = function replaceUrls (options) {
  return function (files, metalsmith, done) {
    const file = files[options.feedPath]
    file.contents = new Buffer(
      file.contents.toString().replace(/(src|href)="\//g, '$1="' + options.url)
    )
    done()
  }
}

export default plugin
