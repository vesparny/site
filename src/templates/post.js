import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import * as P from '../components/primitives'
import db from '../db'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewsCount: null
    }
  }

  componentDidMount() {
    const { location } = this.props
    const page = encodeURIComponent(
      location.pathname.substr(1).replace(/\//g, '--')
    )
    db.collection('views')
      .doc(page)
      .onSnapshot(doc => {
        if (doc.exists) {
          this.setState({
            viewsCount: doc.data().count || 0
          })
        }
      })
  }
  render() {
    const {
      data: { mdx },
      location
    } = this.props
    return (
      <Layout location={location} showWritingLink>
        <Helmet>
          <title>{mdx.frontmatter.title}</title>
          <meta name="description" content={mdx.frontmatter.description} />
          <meta property="og:title" content={mdx.frontmatter.title} />
          <meta
            property="og:description"
            content={mdx.frontmatter.description}
          />
        </Helmet>
        <P.Box
          m="0 auto"
          pt={5}
          css={{
            maxWidth: '740px'
          }}>
          <P.H1 fontSize={[4, 5]}>{mdx.frontmatter.title}</P.H1>
          <P.Text fontSize={1} color="silver" mt={2}>
            {mdx.frontmatter.date} - Views: {this.state.viewsCount}
          </P.Text>
          <P.Card mt={2} mb={4}>
            <P.Flex alignItems="center">
              {mdx.frontmatter.avatarUrl && (
                <P.Image
                  css={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '9999999px'
                  }}
                  src={mdx.frontmatter.avatarUrl}
                />
              )}
              <P.Text ml={2} color="silver" textAlign="center" fontSize={1}>
                {mdx.frontmatter.author}
              </P.Text>
              {mdx.frontmatter.twitter && (
                <Fragment>
                  <P.Text color="silver" fontSize={1}>
                    {' ( '}
                  </P.Text>
                  <P.Box>
                    <P.A
                      href={`https://twitter.com/${mdx.frontmatter.twitter}`}
                      fontSize={1}>
                      @{mdx.frontmatter.twitter}
                    </P.A>
                  </P.Box>
                  <P.Text color="silver" fontSize={1}>
                    {' ) '}
                  </P.Text>
                </Fragment>
              )}
            </P.Flex>
          </P.Card>
          <P.Separator />
          <P.Box mt={4}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </P.Box>
        </P.Box>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        avatarUrl
        twitter
        date(formatString: "dddd, MMMM Do YYYY")
        categories
        keywords
      }
      code {
        body
      }
    }
  }
`
