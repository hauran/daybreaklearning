import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import Landing from './pages/landing'
import About from './pages/about'
import PortfolioList from './pages/portfolioList'
import PortfolioCheck from './pages/portfolioCheck'
import PortfolioOpen from './pages/portfolioOpen'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

import './css/app.css'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends Component {
  render() {
    return (
      <Router history={appHistory}>
        <Route path="/" component={Landing}/>
        <Route path="about" component={About}/>
        <Route path="friend" component={PortfolioOpen}/>
        <Route path="portfolioAccess/:code" component={PortfolioCheck}/>
        <Route path="portfolio" component={PortfolioList}/>
        <Route path="portfolio/:slug" component={Portfolio}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={Landing}/>
      </Router>
    );
  }
}

export default App;
