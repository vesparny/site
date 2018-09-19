import Link from 'next/link'
import posts from '../posts'
import Page from '../layouts/main'
import Post from '../layouts/post'
import { Card, Box, Flex } from 'rebass'
import { Text, Container, Separator, A as L } from '../components/ui'
import React, { Component } from 'react'
import Error from 'next/error'
import format from 'date-fns/format'
import {
  P,
  Blockquote,
  H4,
  H3,
  A,
  Code,
  InlineCode,
  Pre,
  Hr,
  Li,
  Ul,
  Img
} from '../components/mdx'

export default class Writing extends Component {
  static getInitialProps({ query, res }) {
    const permalink = query.id
      ? query.id
      : `/writing/${query.year}/${query.slug}`
    if (res) {
      if (!query.id) res.statusCode = 200
      if (res.statusCode !== 200 && !posts.imports[permalink])
        res.statusCode = 404
    }
    return {
      permalink: posts.imports[permalink] ? permalink : null,
      isPost: Object.keys(query).length > 0,
      meta: posts.imports[permalink]
        ? posts.meta.find(p => p.permalink === permalink)
        : null
    }
  }

  render() {
    const { permalink, isPost, meta } = this.props
    const MDXPost = posts.imports[permalink]
    if (isPost && !MDXPost) {
      return <Error statusCode={404} />
    }
    if (permalink) {
      return (
        <Post>
          <Card as="aside">
            <Text as="h1" m={0} fontSize={5} textAlign="center">
              {meta.title}
            </Text>
            <Text fontSize={1} textAlign="center" color="silver" mt={3} mb={4}>
              {format(meta.date, 'dddd, MMMM Do YYYY')}
            </Text>
            <Separator />
            <Card mt={4} mb={4}>
              <Flex alignItems="center" justifyContent="center">
                <Box
                  as="img"
                  css={{
                    maxWidth: 'none',
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#ddd',
                    borderRadius: '9999999px'
                  }}
                  src="https://s.gravatar.com/avatar/b191979120db1749f5f8c8cadc2ac4a9?s=30"
                />
                <Text ml={2} color="silver" textAlign="center" fontSize={1}>
                  {meta.author}
                </Text>
              </Flex>
            </Card>
          </Card>
          <Container p={[3, 4, 4]}>
            <MDXPost
              components={{
                p: P,
                blockquote: Blockquote,
                h4: H4,
                h3: H3,
                a: A,
                code: Code,
                inlineCode: InlineCode,
                pre: Pre,
                hr: Hr,
                li: Li,
                ul: Ul,
                img: Img
              }}
            />
          </Container>
        </Post>
      )
    } else {
      return (
        <Page>
          <Box p={[3, 4, 4]}>
            {posts.meta.map(post => (
              <Flex
                key={post.permalink}
                mb={3}
                flexDirection={['column', 'row', 'row']}
                alignItems="baseline">
                <Text
                  color="silver"
                  css={{
                    display: 'inline-block',
                    width: '150px'
                  }}>
                  {format(post.date, 'MMMM DD, YYYY')}
                </Text>
                <Box>
                  <Link
                    display={'inline-block'}
                    passHref
                    href={`/writing?id=${post.permalink}`}
                    as={post.permalink}>
                    <L>{post.title}</L>
                  </Link>
                </Box>
              </Flex>
            ))}
          </Box>
        </Page>
      )
    }
  }
}
