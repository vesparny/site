import React from 'react'

const Intro = (props) => {
  return (
    <article className='Intro' style={{
      borderBottom: '#E7EEF2 1px solid',
      marginBottom: '4rem',
      paddingBottom: '4rem'
    }}>
      {props.children}
    </article>
  )
}

Intro.defaultProps = {
  tags: []
}

export default Intro
