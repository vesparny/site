import React from 'react'
import Headroom from 'react-headroom'
import { Flex, Box } from 'reflexbox'
import { Avatar } from 'rebass'
import FaFeed from 'react-icons/lib/fa/feed'
import { getAbsoluteURL } from '../utils'

let headerStyle = {
  height: '65px',
  width: '100%',
  backgroundPosition: 'center center',
  backgroundSize: 'cover'
}

const Header = (props) => {
  if (props.isArchive) {
    headerStyle = Object.assign(
      {},
      headerStyle,
      {
        backgroundImage: `url(${getAbsoluteURL('/images/front.jpg')})`,
        height: '400px'
      }
    )
  }
  return (
    <Box
      className='Header'
      style={{
        width: '100%',
        textAlign: 'center'
      }}>
      <Flex
        className='hero'
        flexColumn
        justify='center'
        style={headerStyle}>
        {props.isArchive &&
          <div>
            <h1 className='title'>{props.site.siteTitle}</h1>
            <h2 className='desc'>{props.site.siteDescription}</h2>
          </div>
        }
        <div className='logo'>
          <a href={getAbsoluteURL('/')}>
            <Avatar
              size={50}
              style={{
                backgroundColor: 'transparent'
              }}
              src={getAbsoluteURL('logo.png')} />
          </a>
        </div>
        <div style={{
          width: '100%',
          position: 'absolute',
          top: 0
        }}>
          <Headroom>
            <Flex
              align='center'
              justify='flex-end'
              style={{
                background: '#fff',
                lineHeight: '4rem',
                width: '100%',
                'paddingRight': '20px',
                boxShadow: '0 0 1px rgba(0,0,0,.15)',
                height: '65px'
              }}>
              <h3 style={{display: 'inline-block', 'margin': 0}}>
                <a href={getAbsoluteURL('about')} className='nav'>About</a>
              </h3>
              <h3 style={{display: 'inline-block', 'margin': 0}}>
                <a href={getAbsoluteURL('projects')} className='nav'>Projects</a>
              </h3>
              <a href={getAbsoluteURL('feed.xml')} style={{fontSize: '3rem'}} title='subscribe' className='tomato'>
                <FaFeed />
              </a>
            </Flex>
          </Headroom>
        </div>
      </Flex>
    </Box>
  )
}

export default Header
