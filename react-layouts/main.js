import 'normalize.css/normalize.css'
import 'highlight.js/styles/github.css'
import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import attachFastClick from 'fastclick'
import layouts from './layouts'

const rootEl = document.getElementById('root')
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

const Root = layouts[window.BOOTSTRAP_CLIENT_STATE.layout]

ReactDOM.render(
  <Root {...window.BOOTSTRAP_CLIENT_STATE} />,
  rootEl
)
