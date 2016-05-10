import React from 'react'
import { Flex, Box } from 'reflexbox'
import { HeadingLink, Fixed, Avatar, Space } from 'rebass'

const Header = (props) => {
  return (
    <Flex
      is='header'
      justify='flex-end'
      align='center'
      px={4}
      style={{
        height: '60px'
      }}>
      <Fixed style={{
        top: '10px',
        left: '10px'
      }}>
        <Avatar
          size={50}
          src='https://s.gravatar.com/avatar/b191979120db1749f5f8c8cadc2ac4a9?s=50' />
      </Fixed>
      <Box>
        <HeadingLink href='/about' style={{display: 'inline-block'}}>
          About
        </HeadingLink>
        <Space x={2} />
        <HeadingLink href='/projects' style={{display: 'inline-block'}}>
          Projects
        </HeadingLink>
      </Box>
    </Flex>
  )
}

export default Header
