import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* { box-sizing: border-box; }
  body { margin: 0; }
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: tomato;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  #nprogress .peg {
    display: none;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>With Emotion</title>
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalStyle whiteColor />

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
