import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';

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
            <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
