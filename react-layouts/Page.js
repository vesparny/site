import React from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'

const Page = (props) => {
  return (
    <Wrapper {...props}>
      <Box mt={3}>
        <Box
          is='article'
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: props.content }} />
      </Box>
    </Wrapper>
  )
}

export default Page
