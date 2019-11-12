import React, { Component } from 'react'
import Footer from './footer';

class Register extends Component {
  render() {
    return (
      <div className="container">
        <h3>Enter username</h3>
        <h3>Enter birthday</h3>
        <h3>Enter country</h3>
        <h3>Enter mail</h3>
        <h3>Enter password</h3>
        <Footer />
      </div>
    )
  }
}

export default Register