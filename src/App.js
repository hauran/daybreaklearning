import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Landing from './pages/landing'
import About from './pages/about'
import PortfolioList from './pages/portfolioList'
import Portfolio from './pages/portfolio'

import './less/app.less'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing}/>
        <Route path="about" component={About}/>
        <Route path="portfolio" component={PortfolioList}/>
        <Route path="/portfolio/:slug" component={Portfolio}/>
        <Route path="*" component={Landing}/>
      </Router>
    );
  }
}

export default App;
