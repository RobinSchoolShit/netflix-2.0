import './App.scss'

import React, { Component } from 'react'
import Homepage from './pages/homepage/Homepage'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
      </div>
    )
  }
}
