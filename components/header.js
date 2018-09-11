import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'
import { A } from '../components/ui'
import { Box } from 'rebass'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <Box px={4} pt={3} color="near-black">
    <Link prefetch href="/" passHref>
      <A>arnodo.net</A>
    </Link>{' '}
    (
    <A href={`https://github.com/vesparny/site`} target="_blank">
      src
    </A>
    )
  </Box>
)
