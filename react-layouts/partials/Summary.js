import React from 'react'
import moment from 'moment'
import { Avatar, Space } from 'rebass'
const Summary = (props) => {
  return (
    <div>
      <Avatar
        style={{float: 'left'}}
        size={24}
        src='https://s.gravatar.com/avatar/b191979120db1749f5f8c8cadc2ac4a9?s=50' />
      <Space />
      <span>{props.author}</span>
      {props.tags.length && <span> on </span>}
      {props.tags.map((tag, index) => {
        const link = <a href={`/tag/${tag.toLowerCase()}`} className='tag'>{tag}</a>
        return index === props.tags.length - 1
          ? <span key={index}>{link}</span>
          : <span key={index}>{link}, </span>
      })}
      <Space />
      |
      <Space />
      <time dateTime={props.date}>
        {moment(props.date).format('DD MMMM YYYY')}
      </time>
    </div>
  )
}

export default Summary
