import React, { Fragment, Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import * as P from './primitives'
import theme from '../theme'
import Header from './header'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

if (global.document) {
  const info = [
    `You can find the code here: https://github.com/vesparny/site`,
    `Cheers! 😀`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${theme.colors.white}
  }
`
export const Root = props => (
  <P.Box
    {...props}
    px={[3, 4, 4]}
    css={{
      '& *': {
        boxSizing: 'border-box'
      }
    }}
  />
)

export default class Layout extends Component {
  componentDidMount() {
    // analytics here
  }
  render() {
    const { children, location, showWritingLink } = this.props
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `}
        render={({ site }) => (
          <Fragment>
            <Helmet
              defaultTitle={site.siteMetadata.title}
              titleTemplate={`%s | ${site.siteMetadata.title}`}>
              <meta
                name="description"
                content={site.siteMetadata.description}
              />
              <link
                rel="canonical"
                href={`${site.siteMetadata.siteUrl}${location.pathname}`}
              />
              <meta property="og:title" content={site.siteMetadata.title} />
              <meta
                property="og:url"
                content={`${site.siteMetadata.siteUrl}${location.pathname}`}
              />
              <meta
                property="og:description"
                content={site.siteMetadata.description}
              />
              <meta
                property="og:image"
                content={`${site.siteMetadata.siteUrl}/site-thumbnail.png`}
              />
              <link
                rel="shortcut icon"
                type="image/x-icon"
                href="/favicon.ico"
              />
              <html lang="en" />
            </Helmet>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <MDXProvider
                components={{
                  p: P.P,
                  blockquote: P.Blockquote,
                  h3: P.H3,
                  a: P.A,
                  inlineCode: P.InlineCode,
                  pre: P.Pre,
                  hr: P.Hr,
                  li: P.Li,
                  ul: P.Ul,
                  img: P.Img,
                  code: P.Code
                }}>
                <Root>
                  <P.Text fontFamily="sans">
                    <Header showWritingLink={showWritingLink} />
                    {children}
                  </P.Text>
                </Root>
              </MDXProvider>
            </ThemeProvider>
          </Fragment>
        )}
      />
    )
  }
}
