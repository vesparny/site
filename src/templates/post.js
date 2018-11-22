import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import * as P from '../components/primitives'

export default function Post({ data: { mdx }, location, ...rest }) {
  console.log(location)
  return (
    <Layout location={location} hideSidebar>
      <Helmet>
        <title>{mdx.frontmatter.title}</title>
        <meta name="description" content={mdx.frontmatter.description} />
        <meta property="og:title" content={mdx.frontmatter.title} />
        <meta property="og:description" content={mdx.frontmatter.description} />
      </Helmet>
      <P.Card as="aside">
        <P.H1 textAlign="center">{mdx.frontmatter.title}</P.H1>
        <P.Text fontSize={1} textAlign="center" color="silver" mt={3} mb={4}>
          {mdx.frontmatter.date}
        </P.Text>
        <P.Separator />
        <P.Card mt={4} mb={4}>
          <P.Flex alignItems="center" justifyContent="center">
            {mdx.frontmatter.avatarUrl && (
              <P.Image
                css={{
                  width: '30px',
                  height: '30px',
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
                <P.Text color="silver" fontSize={2}>
                  {' ( '}
                </P.Text>
                <P.Box>
                  <P.A
                    href={`https://twitter.com/${mdx.frontmatter.twitter}`}
                    fontSize={2}>
                    @{mdx.frontmatter.twitter}
                  </P.A>
                </P.Box>

                <P.Text color="silver" fontSize={2}>
                  {' ) '}
                </P.Text>
              </Fragment>
            )}
          </P.Flex>
        </P.Card>
      </P.Card>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  )
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
