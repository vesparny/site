import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import * as P from '../components/primitives'

const TitleLink = ({ children, to }) => (
  <P.Link to={to} style={{ zIndex: 2 }}>
    <P.H2
      borderBottom={0}
      fontSize={4}
      mb={0}
      mt={0}
      color="near-black"
      css={{
        display: 'inline-block'
      }}>
      {children}
    </P.H2>
  </P.Link>
)

const Blog = ({ data: { allMdx }, location }) => {
  const posts = allMdx.edges
  return (
    <Layout location={location} hideSidebar>
      <Helmet>
        <title>blog</title>
      </Helmet>
      {posts.map(({ node: post }) => (
        <P.Card
          as="article"
          mb={4}
          p={3}
          key={post.id}
          css={{
            position: 'relative',
            boxShadow: 'rgba(0,0,0,0.075) 3px 6px 10px 0px',
            transition: 'all.3s ease',
            ':hover': {
              boxShadow: 'rgba(0,0,0,0.075) 3px 6px 40px 0px'
            }
          }}>
          <TitleLink to={post.fields.slug}>{post.frontmatter.title}</TitleLink>
          <P.Text fontSize={2} color="silver" mt={2} mb={1}>
            {post.frontmatter.date}
          </P.Text>
          <P.Card mt={0} mb={4}>
            <P.Flex>
              {post.frontmatter.avatarUrl && (
                <P.Image
                  css={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '9999999px'
                  }}
                  src={post.frontmatter.avatarUrl}
                />
              )}
              <P.Text ml={2} color="silver" textAlign="center" fontSize={1}>
                {post.frontmatter.author}
              </P.Text>
              {post.frontmatter.twitter && (
                <Fragment>
                  <P.Text color="silver" fontSize={1}>
                    {' ( '}
                  </P.Text>
                  <P.Box css={{ zIndex: 1 }}>
                    <P.A
                      href={`https://twitter.com/${post.frontmatter.twitter}`}
                      fontSize={1}
                      css={{ zIndex: 1 }}>
                      @{post.frontmatter.twitter}
                    </P.A>
                  </P.Box>

                  <P.Text color="silver" fontSize={1}>
                    {' ) '}
                  </P.Text>
                </Fragment>
              )}
            </P.Flex>
          </P.Card>
          <P.Text>{post.excerpt}</P.Text>
          <P.Link
            to={post.fields.slug}
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              textIndent: '-100%',
              whiteSpace: 'nowrap',
              zIndex: '0',
              overflow: 'hidden'
            }}
          />
        </P.Card>
      ))}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(filter: { fields: { type: { eq: "post" } } }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          id
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
        }
      }
    }
  }
`
