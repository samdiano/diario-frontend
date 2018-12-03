import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Entries from './containers/Entries/Entries';
import Entry from './containers/Entries/Entry';


// import './App.scss';


/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof App
   */
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/entries/:id" exact component={Entry} />
            <Route path="/home" exact component={Entries} />
            <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
