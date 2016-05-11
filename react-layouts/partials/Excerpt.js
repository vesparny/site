import React from 'react'

const Excerpt = (props) => {
  return (
    <div style={{
      padding: '2rem 0'
    }}>
      {props.excerpt}
      <a href={'/' + props.path} className='more tomato'>
        Read more...
      </a>
    </div>
  )
}

export default Excerpt
