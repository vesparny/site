import React from 'react'
import { Flex, Box } from 'reflexbox'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/lib/fa'
import { LinkBlock } from 'rebass'

const Footer = (props) => {
  return (
    <Flex
      is='footer'
      align='center'
      column
      mt={3}
      p={3}>
      <Box>
        Alessandro Arnodo © {new Date().getFullYear()}
      </Box>
      <Box mt={1}>
        <LinkBlock href='https://twitter.com/vesparny' style={{display: 'inline-block'}}>
          <FaTwitter />
        </LinkBlock>
        <LinkBlock href='https://github.com/vesparny' style={{display: 'inline-block'}}>
          <FaGithub />
        </LinkBlock>
        <LinkBlock href='https://linkedin.com/in/alessandroarnodo' style={{display: 'inline-block'}}>
          <FaLinkedin />
        </LinkBlock>
      </Box>
    </Flex>
  )
}

export default Footer
