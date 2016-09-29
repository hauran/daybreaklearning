import React from 'react'
import classNames from 'classnames'
import EmailIcon from 'react-icons/io/ios-email-outline'

import Nav from '../components/nav'
import '../less/contact.less'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sent:false,
      errors:{}
    }
  }

  checkErrors(){
    let email = this.state.email
    let name = this.state.name
    let body = this.state.body

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
    if(!body || !body.length) {
      e.body = true
      noError = false
    }

    this.setState({errors:e})
    return noError
  }

  send(e){
    if(this.checkErrors())
      this.setState({sent:true})
    e.preventDefault()
  }

  handleChange(e) {
    let val = {}
    val[e.target.name] = e.target.value;
    Object.assign(this.state, val)
  }

  render(){
    let alert = classNames('alert', {show:this.state.sent})
    let email = classNames({error:this.state.errors.email})
    let name = classNames({error:this.state.errors.name})
    let body = classNames({error:this.state.errors.body})

    return (
      <div className='page' id='contact'>
        <Nav active='Contact'></Nav>
        <div className='well'>
          <h4><EmailIcon size={35} className='icon'/><a href='mailto:alizapai@gmail.com' target='_blank'>alizapai@gmail.com</a></h4>
      		<h5>- or  -</h5>
      		<form>
    				<div className={alert}>
    				  Thanks for the email!
    				</div>
      			<h3>Drop me an email</h3>
  			  	<input type='text' id='name' name='name' className={name} placeholder='Name' onChange={(e) => {this.handleChange(e)}}  ></input>
  			  	<input type='email' id='email' name='email' className={email} placeholder='Email' onChange={(e) => {this.handleChange(e)}}></input>
      			<textarea rows='7' id='body' name='body' className={body} onChange={(e) => {this.handleChange(e)}}></textarea>
      			<button className='btn btn-primary' onClick={(e) => {this.send(e)}}><i className='icon-heart'></i> Send</button>
      		</form>
      		<br/>

      	</div>
      </div>
    )
  }
}

export default Contact
