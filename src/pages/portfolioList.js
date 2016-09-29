import React from 'react'
import Nav from '../components/nav'
import ListItem from '../components/listItem'

const portfolio = require('../data/portfolios')

import '../less/portfolioList.less'

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
        <Nav active='Portfolio'></Nav>
        <div id='portfolioList'>
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
