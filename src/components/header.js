import React from 'react'
import * as P from './primitives'

export default ({ showWritingLink }) => (
  <P.Flex
    fontSize={3}
    height="60px"
    css={{ height: '60px' }}
    alignItems="center"
    justifyContent="space-between">
    <P.Box>
      <P.Link to={'/'}>arnodo.net</P.Link>
      &nbsp; (&nbsp;
      <P.Link to={`https://github.com/vesparny/site`} target="_blank">
        src
      </P.Link>
      &nbsp;)
    </P.Box>
    {showWritingLink && (
      <P.Box>
        <P.Link to={'/writing'}>writing</P.Link>
      </P.Box>
    )}
  </P.Flex>
)
