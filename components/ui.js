import { Box, Card, Text as DefaultText } from 'rebass'
import theme from './theme'

export const Text = props => (
  <DefaultText
    fontSize={2}
    fontWeight="normal"
    color="near-black"
    fontFamily="sans"
    {...props}
  />
)

export const A = props => (
  <Text
    as="a"
    fontSize={3}
    fontWeight="normal"
    color="pink"
    fontFamily="sans"
    css={{
      textDecoration: 'none',
      transition: 'all .3s ease',
      ':hover': {
        background: theme.colors.pink,
        color: 'white'
      }
    }}
    {...props}
  />
)

export const Container = props => (
  <Box
    m="0 auto"
    css={{
      maxWidth: '650px'
    }}
    {...props}
  />
)

export const Separator = props => (
  <Card width="100%" borderColor="moon-gray" borderBottom={1} {...props} />
)
