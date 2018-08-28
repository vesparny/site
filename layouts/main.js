import React, { Component } from 'react'
import Header from '../components/header'
import { version } from '../package.json'

export default class Main extends Component {
  componentDidMount() {
    const info = [
      `Version: ${version}`,
      `You can find the code here: https://github.com/vesparny/site`,
      `Cheers! 😀`
    ]

    for (const message of info) {
      console.info(message)
    }
  }
  render() {
    return (
      <div className="main">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
