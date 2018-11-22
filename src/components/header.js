import React from 'react'
import * as P from './primitives'
import theme from '../theme'
import TwitterIcon from '../components/twitter-icon'
import GitHubIcon from '../components/github-icon'
import RssIcon from '../components/rss-icon'

const MenuLink = ({ to, children }) => {
  return (
    <P.Box mr={3} fontSize={4}>
      <P.Link to={to} style={{ textDecoration: 'none' }}>
        <P.Text
          fontSize={3}
          as="span"
          css={{
            transition: 'all .3s ease',
            ':hover': {
              color: theme.colors.white,
              background: theme.colors.green
            }
          }}>
          {children}
        </P.Text>
      </P.Link>
    </P.Box>
  )
}

const IconLink = ({ to, component: Icon }) => {
  return (
    <P.Box mr={3} fontSize={4}>
      <P.Link
        to={to}
        style={{
          textDecoration: 'none',
          lineHeight: '27px'
        }}>
        <Icon
          css={{
            stroke: theme.colors.black,
            transition: 'all .3s ease',
            strokeWidth: '2',
            ':hover': {
              stroke: theme.colors.orange
            }
          }}
        />
      </P.Link>
    </P.Box>
  )
}

export default () => (
  <P.Card
    as="header"
    bg="white"
    css={{
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '20',
      right: '0',
      height: '3.6rem',
      boxShadow: 'rgba(0, 0, 0, 0.075) 0px 4px 5px 0px'
    }}>
    <P.Flex alignItems="center" mx={[3]} css={{ height: '100%' }}>
      <P.Box>
        <P.Link to={'/'} style={{ textDecoration: 'none' }}>
          <P.H1
            color="orange"
            fontSize={4}
            css={{
              transition: 'all .3s ease',
              ':hover': {
                color: theme.colors.white,
                background: theme.colors.green
              }
            }}>
            www
          </P.H1>
        </P.Link>
      </P.Box>
      <P.Flex
        justifyContent="flex-end"
        css={{
          flexGrow: 1
        }}>
        <MenuLink to={'/guides/'}>Guides</MenuLink>
        <MenuLink to={'/blog/'}>Blog</MenuLink>
        <MenuLink to={'/donate/'}>Donate</MenuLink>
        <IconLink to={'https://twitter.com'} component={TwitterIcon} />
        <IconLink to={'https://github.com'} component={GitHubIcon} />
        <IconLink to={'https://rss.com'} component={RssIcon} />
      </P.Flex>
    </P.Flex>
  </P.Card>
)
