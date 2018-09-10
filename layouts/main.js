import React, { Component } from 'react'
import Header from '../components/header'
import { version } from '../package.json'

if (global.document) {
  const info = [
    `Version: ${version}`,
    `You can find the code here: https://github.com/vesparny/site`,
    `Cheers! 😀`
  ]

  for (const message of info) {
    console.log(message)
  }
}
export default class Main extends Component {
  componentDidMount() {
    window
      .fetch(`/visit?url=${window.location.pathname + window.location.search}`)
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
