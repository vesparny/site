import React from 'react'
import moment from 'moment'
import { Heading } from 'rebass'

const Intro = (props) => {
  return (
    <header>
      <a href={'/' + props.path}>
        <Heading level={1}>{props.title}</Heading>
      </a>
      <section>
        <time dateTime={props.date}>
          {moment(props.date).format('DD MMMM YYYY')}
        </time>
        {props.tags.length && <span> on </span>}
        {props.tags.map((tag, index) => {
          const link = <a href={`/tag/${tag.toLowerCase()}`}>{tag}</a>
          return index === props.tags.length - 1
            ? <span key={index}>{link}</span>
            : <span key={index}>{link}, </span>
        })}
        {props.excerpt &&
          <div>{props.excerpt}</div>
        }
      </section>
    </header>
  )
}

Intro.defaultProps = {
  tags: []
}

export default Intro
