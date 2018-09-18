import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import theme from '../components/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${theme.colors.red};
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
          <Head>
            <link
              rel="mask-icon"
              href="http://arnodo.net/static/logo.svg"
              color="#000000"
            />
            <link rel="apple-touch-icon" href="/static/touch-icon.png" />
            <link rel="icon" href="/static/touch-icon.png" type="image/png" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            />
            <meta name="description" content="Just another code monkey" />
            <meta name="twitter:site" content="@vesparny" />
            <meta name="twitter:creator" content="@vesparny" />
          </Head>

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
