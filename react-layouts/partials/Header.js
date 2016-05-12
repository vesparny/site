import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Avatar, Space } from 'rebass'
import { FaFeed } from 'react-icons/lib/fa'
import { getAbsoluteURL } from '../utils'

const Header = (props) => {
  return (
    <Box
      className='Header'
      is='header'
      align='center'
      style={{
        width: '100%',
        textAlign: 'center'
      }}>
      <Flex
        className='hero'
        column
        align='center'
        justify='center'
        style={{
          backgroundImage: `url(${getAbsoluteURL('/images/front.jpg')})`,
          height: !props.isArchive ? '62px' : '250px',
          width: '100%',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}>
        {props.isArchive &&
          <div>
            <h1 className='title'>{props.site.siteTitle}</h1>
            <h2 className='desc'>{props.site.siteDescription}</h2>
          </div>
        }
        <div className='logo' style={{
          top: '10px',
          left: '10px',
          position: 'fixed'
        }}>
          <a href={props.site.url}>
            <Avatar
              size={50}
              style={{
                backgroundColor: 'transparent'
              }}
              src={getAbsoluteURL('logo.png')} />
          </a>
        </div>
        <Box style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          lineHeight: '4rem'
        }}>
          <h3 style={{display: 'inline-block'}}>
            <a href={getAbsoluteURL('about')} className='nav'>About</a>
          </h3>
          <Space x={2} />
          <h3 style={{display: 'inline-block'}}>
            <a href={getAbsoluteURL('projects')} className='nav'>Projects</a>
          </h3>
          <Space x={2} />
          <a href={getAbsoluteURL('feed.xml')} style={{fontSize: '3rem'}} title='subscribe' className='tomato'>
            <FaFeed />
          </a>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
