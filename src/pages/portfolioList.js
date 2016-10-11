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
        <Nav active='Portfolio' logo={true}></Nav>
          <div id='portfolioList'>
            {this.props.active ?
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
              :
                <p>I’m excited to share my work with you. Please email me <a href='mailTo:aliza@daybreaklearningco.com' target='_blank'>aliza@daybreaklearningco.com</a> for the link to my portfolio!</p>
            }
          </div>

      </div>
    )
  }
}

export default PortfolioList
