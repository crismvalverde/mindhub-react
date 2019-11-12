import React, { Component } from 'react'
import Footer from './footer';


class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <h3>Enter username</h3>
        <h3>Enter password</h3>
        <Footer />
      </div>
    )
  }
}

export default LogIn