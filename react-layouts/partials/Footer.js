import React from 'react'
import { Flex, Box } from 'reflexbox'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/lib/fa'

const iconStyle = {
  display: 'inline-block',
  fontSize: '4rem'
}
const Footer = (props) => {
  return (
    <Flex
      is='footer'
      align='center'
      column
      style={{
        marginTop: '3rem'
      }}>
      <Box>
        Alessandro Arnodo © {new Date().getFullYear()}
      </Box>
      <Box mt={1}>
        <a href='https://twitter.com/vesparny' className='tomato' style={iconStyle}>
          <FaTwitter />
        </a>
        <a href='https://github.com/vesparny' className='tomato' style={iconStyle}>
          <FaGithub />
        </a>
        <a href='https://linkedin.com/in/alessandroarnodo' className='tomato' style={iconStyle}>
          <FaLinkedin />
        </a>
      </Box>
      <div style={{
        padding: '1rem 0'
      }}>
        Source available on <a href='https://github.com/vesparny/alessandro.arnodo.net'>GitHub</a>
      </div>
    </Flex>
  )
}

export default Footer
