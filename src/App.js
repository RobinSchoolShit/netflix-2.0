import './App.css'

import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Netflix</h1>
      </div>
    )
  }
}
