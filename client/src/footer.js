import React, { Component } from 'react'
import homeIcon from './img/homeIcon.png'
import { Link } from 'react-router-dom'

class HomeButton extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Link to="/">
          <img className="homeIcon" src={homeIcon} alt="Home" />
        </Link>
      </div>
    )
  }
}

export default HomeButton