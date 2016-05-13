import { Component } from 'react'
import Keen from 'keen-js'
import { trackPageView } from '../utils'

class KeenIO extends Component {
  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      this.init()
      this.keen.addEvent('pageView', trackPageView())
    }
  }
  init () {
    this.keen = new Keen({
      projectId: this.props.site.keenPI,
      writeKey: this.props.site.keenWK
    })
  }
  render () {
    return null
  }
}

Keen.defaultProps = {
  pagination: {
    files: []
  }
}

export default KeenIO
