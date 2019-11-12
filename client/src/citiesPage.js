import React, { Component } from 'react'
import flecha from './img/flecha.png'
import { Route, Link } from 'react-router-dom'
import Cities from './Cities'

class citiesPage extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/cities">
          <img className="flechaIcon" src={flecha} alt="Cities Icon" />
        </Link>
        <Route exact path='/cities' component={Cities} />
      </div>
    )
  }
}

export default citiesPage