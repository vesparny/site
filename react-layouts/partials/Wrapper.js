import React from 'react'
import { Flex, Box } from 'reflexbox'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import KeenIO from './KeenIO'

const Wrapper = (props) => {
  return (
    <Flex
      column
      style={{
        minHeight: '100vh'
      }}>
      <Helmet
        htmlAttributes={{'lang': 'en'}} // amp takes no value
        title={props.title}
        titleTemplate={`${props.site.siteTitle} - %s`}
        defaultTitle={props.site.siteTitle}
        meta={[
            {charset: 'utf-8'},
            {httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},

            {'name': 'description', 'content': props.description || props.site.siteDescription},

            {property: 'og:type', content: 'article'},
            {property: 'og:site_name', content: props.site.siteTitle},
            {property: 'og:locale', content: 'en_US'},
            {property: 'og:title', content: props.title || props.site.siteTitle},
            {property: 'og:description', content: props.description || props.site.siteDescription},
            {property: 'og:card', content: 'summary'},
            {property: 'og:site', content: props.site.twitter},
            {property: 'og:creator', content: props.site.twitter},
            {property: 'og:creator', content: props.site.url + (props.permalink || '')},
            {property: 'og:image', content: props.site.url + 'logo.png'},
            {property: 'og:image:width', content: '200'},
            {property: 'og:image:height', content: '200'},

            {name: 'twitter:card', content: 'summary'},
            {name: 'twitter:site', content: props.site.twitter},
            {name: 'twitter:title', content: props.title || props.site.siteTitle},
            {name: 'twitter:description', content: props.description || props.site.siteDescription}
        ]}
        link={[
            {'rel': 'alternate', 'type': 'application/rss+xml', 'title': props.site.siteTitle, 'href': props.site.url + props.site.feedPath},
            {'rel': 'shortcut icon', 'href': '/favicon.ico'}
        ]}
      />
      <Header {...props} />
      <Flex
        is='div'
        align='center'
        column
        auto
        role='main'
        style={{
          paddingTop: '3rem'
        }}>
        <Box style={{
          width: '90%',
          maxWidth: '710px'
        }}>
          {props.children}
        </Box>
      </Flex>
      <Footer />
      <KeenIO {...props} />
    </Flex >
  )
}

export default Wrapper
