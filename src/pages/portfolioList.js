import React from 'react'
import Nav from '../components/nav'
import ListItem from '../components/listItem'

const portfolio = require('../data/portfolios')

import '../css/portfolioList.css'

class PortfolioList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    setTimeout(() => {
      window.scrollTo(0,0)
    },1)
  }

  render(){
    return (
      <div className='page'>
        <Nav active='Portfolio' logo={true}></Nav>
        <div id='portfolioList'>
          <div className='recent'>
            More recent portfolio samples from January 2017 - present are available upon request. Please email me, <a href='mailto:aberaliza@gmail.com' target='_blank'>aberaliza@gmail.com</a>,  to set up a walkthrough.
          </div>
          <ul>
          {
            portfolio.map((p,i) => {
              return (
                <li key={i}>
                  <ListItem item={p}></ListItem>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioList
