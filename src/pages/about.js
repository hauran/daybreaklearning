import React from 'react'
import ResumeIcon from 'react-icons/lib/io/ribbon-b'

import Nav from '../components/nav'
import '../css/about.css'


const About = () => {
  return (
    <div className='page'>
      <Nav active='About' logo={true}></Nav>
      <div id='about'>
        <img src='/img/about.png' alt='smile'></img>
        <div className='bio'>
          <h4>About Me</h4>
          <pre>
            I believe that new technologies and interfaces provide for ever-increasing connections between people of all ages. While my portfolio is diverse, all my projects showcase a commitment to the user’s engagement, learning and individual experience. Visit my portfolio to see some of my favorite pieces from the past decade.
          </pre>
          <a href='/Aliza_Aber_Resume.pdf' target='_blank'><ResumeIcon size={20}/> Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About
