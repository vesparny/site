import React, { Component } from 'react'
import { Box } from 'reflexbox'
import Wrapper from './partials/Wrapper'
import Intro from './partials/Intro'
import Summary from './partials/Summary'
import Excerpt from './partials/Excerpt'

class Archive extends Component {
  render () {
    return (
      <Wrapper {...this.props}>
        <Box mt={3}>
          {this.props.pagination.files.map((file, index) => {
            return (
              <Intro key={index}>
                <header className='Intro'>
                  <a href={'/' + file.path} className='title'>
                    <h2 style={{
                      margin: 0
                    }}>{file.title}</h2>
                  </a>
                </header>
                <Excerpt {...file} />
                <footer style={{
                  fontFamily: '"Open Sans", sans-serif',
                  lineHeight: '2.7rem'
                }}>
                  <Summary {...file} />
                </footer>
              </Intro>
            )
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
