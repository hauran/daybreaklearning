import React from 'react'
import Nav from '../components/nav'
import _ from 'lodash'
import classNames from 'classnames'
import '../less/portolio.less'
import { Link } from 'react-router'

const portfolio = require('../data/portfolios')

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.findItemBySlug(this.props.params.slug)
    }
  }
  
  componentDidMount(){
    window.scrollTo(0,0)
  }

  findItemBySlug(slug){
    return _.find(portfolio, { 'slug': slug});
  }

  render(){
    const i = this.state.item

    let half = classNames({'half':i.images.length > 1})
    return (
      <div className='page'>
        <Nav></Nav>
        <div id='details'>
          <h4>{i.title}</h4>
          <div className='description'>{i.description}</div>
          <div className='well'>
				 		My Role: <span>{i.role.title}</span>
            <ul>
            {
              i.role.tasks.map((t,i) =>{
                return (
                  <li key={i}>{t}</li>
                )
              })
            }
            </ul>
  				</div>

          <div className='images'>
            {
              i.images.map((img,i) =>{
                return (
                  <img className={half} src={img} key={i} alt='screenshot' ></img>
                )
              })
            }
          </div>

          <div className='challenge'>
            <h5>Challenge</h5>
  			 		<div>{i.challenge}</div>
          </div>

          <div className='approach'>
            <h5>Approach</h5>
  			 		<div>{i.strategy}</div>
          </div>
          <hr/>
		      <Link className='back' to="/portfolio">Back to Portfolio</Link>
        </div>
      </div>
    )
  }
}

export default Details
