import React, { Component } from 'react'
import logo from './img/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img className="logo" src={logo} alt=" Mytinerary logo" />
        </div>
      </div>
    )
  }
}

export default Header