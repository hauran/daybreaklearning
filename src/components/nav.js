import React from 'react'
import { Link } from 'react-router'

import '../less/nav.less'

const Nav = () => {
  return (
    <div id="nav">
      <h3 className="title"><Link to='/'>Aliza Aber</Link></h3>
      <ul>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/AlizaPai_Resume.pdf" target='_blank'>Resume</Link></li>
      </ul>
    </div>
  )
}

export default Nav
