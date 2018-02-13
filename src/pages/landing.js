import React from 'react'
import classNames from 'classnames'
import Nav from '../components/nav'

import '../css/landing.css'


class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo:false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({logo:true})
    },0)
  }

  render() {
    let overlay = classNames('overlay', 'show')
    let nav = classNames('nav', 'show')
    let content = classNames('content', 'show')
    return (
      <div id='main' className='page'>
        <div className='background'></div>
        <div className={overlay}></div>
        <div className='container'>
          <div className={nav}>
            <Nav logo={this.state.logo}></Nav>
          </div>
          <div className={content}>
            <h1>Daybreak Learning</h1>
            <p className="lead">Innovation that Extends the Boundaries of Learning</p>
            <br/>
            <div className='well'>
              <h4>Expertise:</h4>
              <ul>
                <li>EdTech Product Strategy and Design</li>
                <li>Multimedia/Video and Instructional Content Creation</li>
                <li>Full Stack Custom Development for Web and Mobile</li>
                <li>Packaging and Consulting for LMS Integration </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
