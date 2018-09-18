import { Link, Text, Card, Box, Image } from 'rebass'

const BaseText = props => (
  <Text
    lineHeight="26px"
    color="near-black"
    fontWeight="normal"
    fontSize={2}
    fontFamily="sans"
    {...props}
  />
)

export const P = props => <BaseText {...props} mb={4} mt={0} as="p" />

export const Img = props => <Image {...props} />

export const Blockquote = props => (
  <Card
    m="1.75rem 0 1.75rem -2.2rem"
    pl={4}
    as="blockquote"
    borderColor="near-black"
    borderLeft={8}
    css={{
      fontStyle: 'italic',
      color: 'pink'
    }}
    {...props}
  />
)

export const H4 = props => (
  <BaseText
    fontSize={2}
    mt={4}
    mb={3}
    mx={0}
    fontWeight="bold"
    {...props}
    as="h4"
  />
)

export const H3 = props => (
  <BaseText
    fontSize={3}
    mt={5}
    mb={4}
    mx={0}
    fontWeight="bold"
    {...props}
    as="h3"
  />
)

export const A = props => (
  <Link
    fontFamily="sans"
    color="light-blue"
    css={{
      textDecoration: 'none',
      transition: 'all .3s ease',
      ':hover': {
        textDecoration: 'underline'
      }
    }}
    {...props}
  />
)

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

export const Code = props => (
  <Text color="red" lineHeight="20px" fontSize={1} as="code" {...props} />
)

export const Pre = props => (
  <Card
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

export const InlineCode = props => (
  <BaseText
    color="red"
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
    fontSize={2}
    mb={2}
    as="li"
    css={{
      '::before': {
        content: '"-"',
        display: 'inline-block',
        color: 'rgb(153, 153, 153)',
        position: 'absolute',
        marginLeft: '-15px'
      }
    }}
    {...props}
  />
)
