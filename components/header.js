import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div className="logo">
    <Link prefetch href="/">
      <a>arnodo.net</a>
    </Link>{' '}
    (
    <a href={`https://github.com/vesparny/site`} target="_blank">
      src
    </a>
    )
  </div>
)
