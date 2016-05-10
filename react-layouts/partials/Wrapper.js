import React from 'react'
import { Flex, Box } from 'reflexbox'
import Footer from './Footer'
import Header from './Header'

const Wrapper = (props) => {
  return (
    <Flex
      column
      style={{
        minHeight: '100vh'
      }}>
      <Header />
      <Flex
        is='div'
        align='center'
        column
        auto
        role='main'>
        <Box style={{
          maxWidth: '710px',
          minWidth: '710px'
        }}>
          {props.children}
        </Box>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Wrapper
