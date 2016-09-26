import React from 'react'
import Nav from '../components/nav'
import ListItem from '../components/listItem'

const portfolio = require('../data/portfolios')

const brainzy = require('../img/portfolio/brainzy/icon.png')
const nme = require('../img/portfolio/nme/icon.jpg')
const icons = [brainzy, nme]

import '../less/portfolioList.less'

const Portfolio = () => {
  return (
    <div className='page'>
      <Nav></Nav>
      <div id='portfolioList'>
        <ul>
        {
          portfolio.map((p,i) => {
            return (
                <li key={i}>
                  <ListItem icon={icons[i]} item={p}></ListItem>
                </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
