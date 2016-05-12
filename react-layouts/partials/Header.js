import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Fixed, Avatar, Space } from 'rebass'
import { FaFeed } from 'react-icons/lib/fa'
import { getAbsoluteURL } from '../utils'

const Header = (props) => {
  return (
    <Flex
      is='header'
      justify='flex-end'
      align='center'
      style={{
        padding: '2rem 3rem',
        height: '100px'
      }}>
      <Fixed style={{
        top: '20px',
        left: '20px'
      }}>
        <a href={props.site.url}>
          <Avatar
            size={50}
            style={{
              backgroundColor: 'transparent'
            }}
            src={getAbsoluteURL('logo.png')} />
        </a>
      </Fixed>
      <Box>
        <h3 style={{display: 'inline-block'}}>
          <a href={getAbsoluteURL('about')}>About</a>
        </h3>
        <Space x={2} />
        <h3 style={{display: 'inline-block'}}>
          <a href={getAbsoluteURL('projects')}>Projects</a>
        </h3>
        <Space x={2} />
        <a href={getAbsoluteURL('feed.xml')} style={{fontSize: '3rem'}} title='subscribe' className='tomato'>
          <FaFeed />
        </a>
      </Box>
    </Flex>
  )
}

export default Header
