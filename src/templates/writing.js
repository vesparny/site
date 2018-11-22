import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import * as P from '../components/primitives'

const Blog = ({ data: { allMdx }, location }) => {
  const posts = allMdx.edges
  return (
    <Layout location={location}>
      <Helmet>
        <title>writing</title>
      </Helmet>
      {posts.map(({ node: post }) => (
        <P.Flex
          key={post.fields.slug}
          mb={3}
          flexDirection={['column', 'row', 'row']}
          alignItems="baseline">
          <P.Text
            color="silver"
            mr={3}
            css={{
              display: 'inline-block',
              width: '180px'
            }}>
            {post.frontmatter.date}
          </P.Text>
          <P.Box>
            <P.Link display={'inline-block'} to={post.fields.slug}>
              {post.frontmatter.title}
            </P.Link>
          </P.Box>
        </P.Flex>
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
