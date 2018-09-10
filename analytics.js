const brcast = require('brcast')
const GitHub = require('github-base')

function createAnalytics({ token = process.env.GIST_TOKEN } = {}) {
  const github = new GitHub({
    token
  })
  const broadcast = brcast({})
  const interval = 60000 // 1 minute
  let lastSynced = null

  broadcast.subscribe(async data => {
    if (!lastSynced || Date.now() - lastSynced > interval) {
      try {
        const gist = await github.get('/gists/' + process.env.GIST_ID)
        const content = JSON.parse(gist.body.files['data.json'].content)
        Object.keys(data).forEach(url => {
          content[url] = content[url] || {
            count: 0
          }
          content[url].count = content[url].count + data[url].count
          content[url].lastVisited = new Date().toISOString()
        })
        try {
          await github.patch('/gists/' + process.env.GIST_ID, {
            files: {
              'data.json': { content: JSON.stringify(content, null, ' ') }
            }
          })
        } catch (err) {
          throw err
        }
        lastSynced = Date.now()
        broadcast.setState({})
      } catch (err) {
        console.log(err)
      }
    }
  })

  return {
    visit: url => {
      const oldState = broadcast.getState()
      const data = oldState[url] || {
        count: 0
      }
      data.count = data.count + 1
      data.lastVisited = new Date().toISOString()
      broadcast.setState({ ...oldState, ...{ [url]: data } })
    }
  }
}

module.exports = createAnalytics
