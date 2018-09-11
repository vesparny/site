import React, { Component } from 'react'
import Header from '../components/header'
import { ThemeProvider } from 'styled-components'
import { version } from '../package.json'
import theme from '../components/theme'
// https://github.com/pricelinelabs/design-system/tree/master/src
// https://github.com/rebassjs/rebass/tree/v2/src
import { Box } from 'rebass'

// https://github.com/rebassjs/rebass/blob/891774b359965b8ce91a85b26dee61c7b1f89c29/src/Root.js
export const Root = props => (
  <Box
    {...props}
    css={{
      '& *': {
        boxSizing: 'border-box'
      }
    }}
  />
)

if (global.document) {
  const info = [
    `Version: ${version}`,
    `You can find the code here: https://github.com/vesparny/site`,
    `Cheers! 😀`
  ]

  for (const message of info) {
    console.log(message)
  }
}
export default class Main extends Component {
  componentDidMount() {
    window
      .fetch(`/visit?url=${window.location.pathname + window.location.search}`)
      .catch(err => console.log(err))
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Header />
          {this.props.children}
        </Root>
      </ThemeProvider>
    )
  }
}
