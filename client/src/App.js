import React, { Component } from 'react'
import Home from './homePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cities from './Cities';
import LogIn from './LogIn';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/cities' component={Cities} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App