import React from 'react'
import { browserHistory } from 'react-router'

class PortfolioOpen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    window.localStorage.setItem('portfolio', true)
    browserHistory.push('/')
  }

  render() {
    return (
      <div className='page'></div>
    )
  }
}

export default PortfolioOpen
