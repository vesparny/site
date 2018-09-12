import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'
import { A } from '../components/ui'
import { Flex } from 'rebass'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <Flex
    height="60px"
    css={{ height: '60px' }}
    alignItems="center"
    px={[3, 4, 4]}>
    <Link prefetch href="/" passHref>
      <A>arnodo.net</A>
    </Link>
    &nbsp; (&nbsp;
    <A href={`https://github.com/vesparny/site`} target="_blank">
      src
    </A>
    &nbsp;)
  </Flex>
)
