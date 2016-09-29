import React from 'react'
import { Link } from 'react-router'

import '../less/nav.less'

const Nav = () => {
  return (
    <div id="nav">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav
