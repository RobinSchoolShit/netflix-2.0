import React, { Component } from 'react'
import './homepage.scss'

import Navigation from '../../components/navigation/Navigation'

export default class Homepage extends Component {
  render() {
    return (
    <div className="homepage">
      <Navigation/>
    </div>
    )
  }
}
