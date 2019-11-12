import React, { Component } from 'react'
import './App.css';
import { Link } from 'react-router-dom'

class LogInPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="logIn">
          <Link to="/login">
            <p>Log In</p>
          </Link>
          <Link to="/register">
            <p>Create Account</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default LogInPage