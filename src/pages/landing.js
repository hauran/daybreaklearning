import React from 'react'
import classNames from 'classnames'
import Nav from '../components/nav'

import '../less/landing.less'


class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay:false,
      nav:false,
      content:false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({overlay:true})
    },750)
    setTimeout(() => {
      this.setState({nav:true})
    },1500)
    setTimeout(() => {
      this.setState({content:true})
    },2000)
  }

  render() {
    let overlay = classNames('overlay', {show:this.state.overlay})
    let nav = classNames('nav', {show:this.state.nav})
    let content = classNames('content', {show:this.state.content})

    return (
      <div id='main' className='page'>
        <div className='background'></div>
        <div className={overlay}></div>
        <div className='container'>
          <div className={nav}>
            <Nav></Nav>
          </div>
          <div className={content}>
            <h1>Daybreak Learning</h1>
            <p className="lead">Innovation that Extends the Boundaries of Learning</p>
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
        </div>
      </div>
    )
  }
}

export default Landing
