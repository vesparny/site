import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { injectGlobal } from 'emotion'

injectGlobal`
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
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>With Emotion</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
