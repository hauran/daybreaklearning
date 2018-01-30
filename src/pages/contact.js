import React from 'react'
import classNames from 'classnames'
import EmailIcon from 'react-icons/lib/io/ios-email-outline'
import 'whatwg-fetch'

import Nav from '../components/nav'
import '../css/contact.css'

const lambda_email = 'https://bx29ntrjge.execute-api.us-east-1.amazonaws.com/prod/sendEmail'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sent:false,
      hidebutton:false,
      errors:{}
    }
  }

  checkErrors(){
    let email = this.state.email
    let name = this.state.name
    let text = this.state.text

    let noError = true
    let e = {}

    if(!name || !name.length) {
      e.name = true
      noError = false
    }
    if(!email || !email.length) {
      e.email = true
      noError = false
    }
    if(!text || !text.length) {
      e.text = true
      noError = false
    }

    this.setState({errors:e})
    return noError
  }

  send(e){
    this.setState({hidebutton:true})
    if(this.checkErrors()){
      fetch(lambda_email, {
        method: 'POST',
        body: JSON.stringify(this.state)
      })
      this.setState({sent:true})
    }
    else {
      this.setState({hidebutton:false})
    }
    e.preventDefault()
  }

  handleChange(e) {
    let val = {}
    val[e.target.name] = e.target.value;
    Object.assign(this.state, val)
  }

  render(){
    return (
      <div className='page' id='contact'>
        <Nav active='Contact' logo={true}></Nav>
        <div className='well flex'>
          <h4><EmailIcon size={35} className='icon'/><a href='mailto:aberaliza@gmail.com' target='_blank'>aberaliza@gmail.com</a></h4>
      	</div>
      </div>
    )
  }
}

export default Contact
