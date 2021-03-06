import React, { Component } from 'react'
import Home from './homePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cities from './Cities';
import LogIn from './LogIn';
import Register from './Register';
import Itineraries from './Itineraries';

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/cities' component={Cities} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/itineraries/:id' component={Itineraries} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App