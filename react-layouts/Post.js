import React from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'
import Summary from './partials/Summary'

const Post = (props) => {
  return (
    <Wrapper {...props}>
      <Box
        mt={3}
        is='article'>
        <header style={{
          borderBottom: '#E7EEF2 1px solid'
        }}>
          <h1 style={{
            margin: 0
          }}>
            {props.title}
          </h1>
          <div style={{
            padding: '2rem 0',
            marginBottom: '2rem',
            fontFamily: '"Open Sans", sans-serif',
            lineHeight: '2.7rem'
          }}>
            <Summary {...props} />
          </div>
        </header>
        <Box
          style={{
            margin: '4rem 0'
          }}
          is='section'
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: props.content }} />
      </Box>
    </Wrapper>
  )
}

export default Post
