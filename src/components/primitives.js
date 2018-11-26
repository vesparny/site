import React from 'react'
import {
  Box as RBox,
  Flex as RFlex,
  Card as RCard,
  Text as RText,
  Image as RImage,
  Header as RHeader,
  Link as RLink
} from 'rebass'
import { Link as GatsbyLink } from 'gatsby'

import theme from '../theme'

export const Box = RBox

export const Flex = RFlex

export const Card = RCard

export const Text = RText
Text.defaultProps = {
  color: 'near-black',
  fontWeight: 'normal',
  fontSize: 2,
  fontFamily: 'sans',
  css: {
    WebkitFontSmoothing: 'antialiased'
  }
}

export const Image = RImage

export const Header = RHeader

export const P = props => <Text as="p" lineHeight={'27px'} my={3} {...props} />

export const Img = Image

export const Blockquote = props => (
  <Card
    m="1.75rem 0 1.75rem -2.2rem"
    pl={4}
    as="blockquote"
    borderColor="green"
    borderLeft={8}
    css={{
      fontStyle: 'italic'
    }}
    {...props}
  />
)

export const H3 = props => (
  <Card
    as="h3"
    fontSize={3}
    mt={5}
    pb={1}
    mb={3}
    mx={0}
    borderBottom={1}
    borderColor="light-gray"
    fontWeight="bold"
    {...props}
  />
)

export const H2 = ({ css = {}, ...rest }) => (
  <Card
    as="h2"
    fontSize={4}
    mt={5}
    pb={1}
    mb={3}
    mx={0}
    borderBottom={1}
    borderColor="light-gray"
    fontWeight="bold"
    {...rest}
  />
)

export const H1 = props => (
  <Text
    as="h1"
    fontSize={5}
    m={0}
    p={0}
    fontWeight="bold"
    color="mid-gray"
    {...props}
  />
)

const Href = ({ css = {}, ...rest }) => (
  <RLink
    color="pink"
    css={{
      ...css,
      ...{
        textDecoration: 'none',
        transition: 'all .3s ease',
        ':hover': {
          color: theme.colors.white,
          background: theme.colors.green
        }
      }
    }}
    {...rest}
  />
)

export const A = Href

export const Hr = props => (
  <Card
    as="hr"
    height="1px"
    borderTop={0}
    borderColor="light-gray"
    my={4}
    p={0}
    {...props}
  />
)

export const Pre = props => (
  <Card
    fontSize={2}
    as="pre"
    border={1}
    borderColor="light-gray"
    p={3}
    my={5}
    css={{
      whiteSpace: 'pre',
      overflow: 'auto'
    }}
    {...props}
  />
)

export const Code = props => (
  <Text color="pink" fontSize="inherit" as="code" {...props} />
)

export const InlineCode = props => (
  <Text
    color="pink"
    m={0}
    as="code"
    css={{
      '::before': {
        content: '"`"'
      },
      '::after': {
        content: '"`"'
      }
    }}
    {...props}
  />
)

export const Ul = props => (
  <Box
    as="ul"
    css={{
      listStyle: 'none'
    }}
    {...props}
  />
)

export const Li = props => (
  <Box
    mb={2}
    as="li"
    css={{
      '::before': {
        content: '"-"',
        display: 'inline-block',
        color: theme.colors.silver,
        position: 'absolute',
        marginLeft: '-15px'
      }
    }}
    {...props}
  />
)

export const Separator = props => (
  <Card width="100%" borderColor="moon-gray" borderBottom={1} {...props} />
)

export const Link = ({ children, to, isAsset, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  if (!isAsset && internal) {
    return (
      <Href as={GatsbyLink} to={to} {...rest}>
        {children}
      </Href>
    )
  }

  return (
    <Href href={to} {...rest}>
      {children}
    </Href>
  )
}

export default Link
