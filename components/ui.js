import { Box } from 'grid-styled/emotion'

export const Root = props => {
  return <Box is="h3" color="red" {...props} />
}

export const Span = props => {
  return <Root is="span" color="red" {...props} />
}

export const Header = props => {
  return <Box is={Root} color="red" {...props} />
}
