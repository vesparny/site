import React from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'
import Intro from './partials/Intro'

const Post = (props) => {
  return (
    <Wrapper>
      <Box mt={3}>
        <Intro {...props} />
        <Box
          is='article'
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: props.body }} />
      </Box>
    </Wrapper>
  )
}

export default Post
