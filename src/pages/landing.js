import React from 'react'

import Nav from '../components/nav'

import '../less/landing.less'

const Landing = () => {
  return (
    <div id='main' className='page'>
      <Nav></Nav>
      <h1>Aliza Pai</h1>
      <p className="lead">Innovative User-Centered Content Design and Product Management</p>
      <br/>
      <div className='well'>
        <h4>Expertise:</h4>
        <ul>
          <li>Children’s Product Ideation and Development</li>
          <li>Interaction and Game Design</li>
          <li>Content Writing and Character Development</li>
          <li>Product Management from Conception through Delivery</li>
          <li>Multidisciplinary Team Collaboration and Leadership</li>
          <li>User Research, Testing and Analysis</li>
        </ul>
      </div>
    </div>
  )
}

export default Landing
