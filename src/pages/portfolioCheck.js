import React from 'react'
import _ from 'lodash'
import SadIcon from 'react-icons/lib/io/sad-outline'
import CheckIcon from 'react-icons/lib/io/checkmark'
import Nav from '../components/nav'
import { browserHistory } from 'react-router'

const check = require('../data/portfolioAccess')

class PortfolioCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checking:true
    }
  }

  componentDidMount(){
    if(_.includes(check,this.props.params.code)){
      this.setState({checking:false, access:true})
      window.localStorage.setItem('portfolio', true)
      setTimeout(() => {
        browserHistory.push('/portfolio')
      },1000)
    }
    else {
      this.setState({checking:false, access:false})
    }

  }

  render() {
    return (
      <div className='page'>
        <Nav active='Portfolio' logo={true}></Nav>
        {
          this.state.checking  ?
          <h5 style={{padding:'1em', color:'#666666'}}>Checking...</h5>
          :
          null
        }
        {
          !this.state.checking && this.state.access  ?
          <p style={{padding:'1em', textAlign:'center', marginTop:'3em'}}>
            <CheckIcon size={60} color='rgb(255, 100, 100)'/><br/>
            You're In!
          </p>
          :
          null
        }
        {
          !this.state.checking && !this.state.access  ?
          <p style={{padding:'1em'}}>
            <div style={{textAlign:'center', marginBottom:'4em', marginTop:'1em'}}>
              <SadIcon size={60} color='rgb(255, 100, 100)'/>
            </div>
            That doesn't seem to be a valid link.<br/>
            Please email me <a href='mailTo:aliza@daybreaklearningco.com' target='_blank'>aliza@daybreaklearningco.com</a> to get access to my portfolio.
          </p>
          :
          null
        }

      </div>
    )
  }
}

export default PortfolioCheck
