import React, { Component } from 'react'
import Header from './header'
import CitiesPage from './citiesPage'
import LogInPage from './logInPage'
import Footer from './footer'

class Home extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>
          <CitiesPage />
          <h4>Want to build your own MYtinerary?</h4>
          <LogInPage />
          <Footer />
      </div>
    )
  }
}

export default Home