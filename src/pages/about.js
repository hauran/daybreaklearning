import React from 'react'
import Nav from '../components/nav'
import '../less/about.less'


const About = () => {
  return (
    <div className='page'>
      <Nav></Nav>
      <div id='about'>
        <img src='/img/about.png' alt='smile'></img>
        <div className='bio'>
          <h4>About Me</h4>
          <pre>
            I believe that new technologies and interfaces provide for ever-increasing connections between people of all ages. While my portfolio is diverse, all my projects showcase a commitment to the user’s engagement, learning and individual experience. Visit my portfolio to see some of my favorite pieces from the past decade.
          </pre>
        </div>
      </div>
    </div>
  )
}

export default About
