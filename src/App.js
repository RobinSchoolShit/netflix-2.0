import './App.scss'

import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Netflix</h1>
      </div>
    )
  }
}
