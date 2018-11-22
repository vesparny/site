import React from 'react'
import * as P from './primitives'

export default () => (
  <P.Box
    width="20rem"
    bg="white"
    css={{
      position: 'fixed',
      zIndex: '10',
      margin: '0',
      top: '3.6rem',
      left: '0',
      bottom: '0',
      boxShadow: 'rgba(0, 0, 0, 0.075) 0px 1px 23px 1px',
      overflowY: 'auto'
    }}>
    sidebar
  </P.Box>
)
