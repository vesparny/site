import markdown from 'metalsmith-markdownit'
import mdHljsPlugin from 'markdown-it-highlightjs'
import emoji from 'markdown-it-emoji'

const md = markdown({
  html: true,
  typographer: true
})
  .use(emoji)
  .use(mdHljsPlugin)

export default md
