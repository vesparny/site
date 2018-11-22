import React from 'react'
import * as P from './primitives'
import { Flex } from 'rebass'

export default () => (
  <Flex
    height="60px"
    css={{ height: '60px' }}
    alignItems="center"
    px={[3, 4, 4]}>
    <P.Link to={'/'}>arnodo.net</P.Link>
    &nbsp; (&nbsp;
    <P.Link to={`https://github.com/vesparny/site`} target="_blank">
      src
    </P.Link>
    &nbsp;)
  </Flex>
)
