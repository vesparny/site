import Link from 'next/link'
import posts from '../posts'
import Page from '../layouts/main'
import Post from '../layouts/post'

import React, { Component } from 'react'
import Error from 'next/error'

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
      isPost: Object.keys(query).length > 0
    }
  }

  render() {
    const { permalink, isPost } = this.props
    const MDXPost = posts.imports[permalink]
    if (isPost && !MDXPost) {
      return <Error statusCode={404} />
    }
    if (permalink) {
      return (
        <Post>
          <MDXPost />
        </Post>
      )
    } else {
      return (
        <Page>
          {posts.meta.map(post => (
            <li key={post.permalink}>
              <Link href={`/writing?id=${post.permalink}`} as={post.permalink}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </Page>
      )
    }
  }
}
