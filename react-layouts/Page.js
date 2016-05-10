import React from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'

const Post = (props) => {
  return (
    <Wrapper>
      <Box mt={3}>
        <Box
          is='article'
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: props.body }} />
      </Box>
    </Wrapper>
  )
}

export default Post
