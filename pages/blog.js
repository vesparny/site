import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Error from 'next/error'

const Posts = {
  '/2015/01/07/introducing-morpheus': dynamic(
    import('../posts/2015/01/07/introducing-morpheus.mdx')
  ),
  '/2015/01/16/morpheus-is-moving-forward': dynamic(
    import('../posts/2015/01/16/morpheus-is-moving-forward.mdx')
  )
}

export default class extends Component {
  static getInitialProps({ query, res }) {
    const permalink = query.id
      ? query.id
      : `/${query.year}/${query.month}/${query.day}/${query.slug}`
    if (res && !Posts[permalink]) {
      res.statusCode = 404
    }
    return {
      permalink: Posts[permalink] ? permalink : null
    }
  }

  render() {
    const { permalink } = this.props
    const Post = Posts[permalink]
    if (!Post) {
      return <Error statusCode={404} />
    }
    return (
      <div>
        <Post />
      </div>
    )
  }
}
