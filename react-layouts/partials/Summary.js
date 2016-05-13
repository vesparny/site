import React from 'react'
import moment from 'moment'
import { Avatar, Space } from 'rebass'
import md5 from 'md5'

const Summary = (props) => {
  return (
    <div className='Summary'>
      <Avatar
        style={{float: 'left'}}
        size={24}
        src={`https://s.gravatar.com/avatar/${md5('alessandro@arnodo.net')}?s=24`} />
      <Space />
      <span>{props.author}</span>
      {props.tags.length && <span> on </span>}
      {props.tags.map((tag, index) => {
        const link = <a href={`/tag/${tag.toLowerCase()}`} className='tag'>{tag}</a>
        return index === props.tags.length - 1
          ? <span key={index}>{link}</span>
          : <span key={index}>{link}, </span>
      })}
      <div className='date'>
        <Space />
        |
        <Space />
        <time dateTime={moment(props.date).format('YYYY-MM-DD')}>
          {moment(props.date).format('DD MMMM YYYY')}
        </time>
      </div>
    </div>
  )
}

export default Summary
