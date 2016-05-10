import React, { Component } from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'
import Intro from './partials/Intro'

class Archive extends Component {
  render () {
    return (
      <Wrapper>
        <Box mt={3}>
          {this.props.pagination.files.map((file, index) => {
            return <Intro key={index} {...file} />
          })}
        </Box>
      </Wrapper>
    )
  }
}

Archive.defaultProps = {
  pagination: {
    files: []
  }
}

export default Archive
