import React from 'react'
import classNames from 'classnames'
import EmailIcon from 'react-icons/io/ios-email-outline'
import 'whatwg-fetch'

import Nav from '../components/nav'
import '../less/contact.less'

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
    let alert = classNames('alert', {show:this.state.sent})
    let email = classNames({error:this.state.errors.email})
    let name = classNames({error:this.state.errors.name})
    let text = classNames({error:this.state.errors.text})
    let button = classNames({hidebutton:this.state.hidebutton})
    return (
      <div className='page' id='contact'>
        <Nav active='Contact' logo={true}></Nav>
        <div className='well'>
          <h4><EmailIcon size={35} className='icon'/><a href='mailto:aliza@daybreaklearningco.com' target='_blank'>aliza@daybreaklearningco.com</a></h4>
      		<h5>- or  -</h5>
      		<form>
      			<h3>Drop me an email</h3>
  			  	<input type='text' id='name' name='name' className={name} placeholder='Name' onChange={(e) => {this.handleChange(e)}}  ></input>
  			  	<input type='email' id='email' name='email' className={email} placeholder='Email' onChange={(e) => {this.handleChange(e)}}></input>
      			<textarea rows='7' id='text' name='text' className={text} onChange={(e) => {this.handleChange(e)}}></textarea>
      			<button className={button} onClick={(e) => {this.send(e)}}><i className='icon-heart'></i> Send</button>
    				    <div className={alert}>
    				  Thanks for the email!
    				</div>
      		</form>
      		<br/>

      	</div>
      </div>
    )
  }
}

export default Contact
