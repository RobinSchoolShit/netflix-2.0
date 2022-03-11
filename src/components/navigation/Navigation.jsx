import React, { Component } from 'react'
import './navigation.scss'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import img from '../../logo.svg'

// import { Routes, Route } from 'react-router-dom'

// import Homepage from '../../pages/homepage/Homepage'

export default class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My list</span>
          </div>
          <div className="right">
            <SearchIcon/>
            <span>KID</span>
            <NotificationsIcon/>
          </div>
        </div>
      </div>
    )
  }
}

