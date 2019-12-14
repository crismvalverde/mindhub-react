import React, { Component } from 'react'
import homeIcon from './img/homeIcon.png'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

class HomeButton extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar expand='lg' fixed='bottom' className="justify-content-center">
            <Link to="/">
              <img className="homeIcon" src={homeIcon} alt="Home" />
            </Link>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default HomeButton