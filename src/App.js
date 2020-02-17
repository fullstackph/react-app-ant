import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './containers/About';
import NoRouteMatch from './containers/404';

import './App.css';
import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          {/* <Header /> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoRouteMatch} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }
}

export default hot(module)(App);
