import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { Link } from 'react-router'


import '../less/nav.less'

let links = [
  {
    link:'/about',
    text:'About'
  },
  {
    link:'/portfolio',
    text:'Portfolio'
  },
  {
    link:'/contact',
    text:'Contact'
  }
]

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    _.each(links, (l) => {
      l.active = !!(this.props.active && (l.text === this.props.active))
    })
    let logo = {backgroundImage:'url(/img/logo_light.png)'}
    if(this.props.active)
      logo = {backgroundImage:'url(/img/logo_dark.png)'}

    let showLogo = classNames({show:this.props.logo})
    return (
      <div id="nav">
        <ul className='logoContainer'>
          <li className={showLogo}>
            <Link to='/'><div className='logo' style={logo}></div></Link>
          </li>
        </ul>
        <ul>
          {
            links.map((l, i) => {
              let active = classNames({active:l.active})
              return (
                <li key={i} className={active}><Link to={l.link}>{l.text}</Link></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Nav
