import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import * as P from '../components/primitives'

export default function Page({
  children,
  location,
  pageContext: { frontmatter }
}) {
  return (
    <Layout location={location} hideSidebar>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} />
      </Helmet>
      <P.H1 textAlign="center">{frontmatter.title}</P.H1>
      {children}
    </Layout>
  )
}
