import React from 'react'

import Nav from '../components/nav'

const img = require('../img/about.png')

const About = () => {
  return (
    <div className='page'>
      <Nav></Nav>
      <img src={img} alt='smile'></img>
      <h4>About Me</h4>
      I believe that new technologies and interfaces provide for ever-increasing connections between people of all ages. While my portfolio is diverse, all my projects showcase a commitment to the user’s engagement, learning and individual experience. Visit my portfolio to see some of my favorite pieces from the past decade.
    </div>
  )
}

export default About
