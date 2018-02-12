import React from 'react'
import Nav from '../components/nav'
import _ from 'lodash'
import classNames from 'classnames'
import '../css/portolio.css'
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
    let half = {}
    if(i.images)
      half = classNames({'half':i.images.length > 1})

    return (
      <div className='page'>
        <Nav active='Portfolio' logo={true}></Nav>
        <div id='details'>
          <h4>{i.title}</h4>
          {
            i.fullDescription ?
            <div className='description'>{i.fullDescription}</div>
            :
            <div className='description'>{i.description}</div>
          }

          {
            i.clients?
            <ul className='clients'>
              {
                i.clients.map( (c) => {
                  return (<li>{c}</li>)
                })
              }
            </ul>
            :
            null
          }

          {
            i.role ?
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
            :
            null
          }

          {
            i.images ?
              <div className='images'>
                {
                  i.images.map((img,i) =>{
                    return (
                      <img className={half} src={img} key={i} alt='screenshot' ></img>
                    )
                  })
                }
              </div>
            :
              null
          }

          {
            i.challenge ?
            <div className='challenge'>
              <h5>Challenge</h5>
    			 		<div>{i.challenge}</div>
            </div>
            :
            null
          }

          {
            i.strategy ?
            <div className='approach'>
              <h5>Approach</h5>
    			 		<div>{i.strategy}</div>
            </div>
            :
            null
          }

          {
            i.spotlights ?
              <div className='spotlights'>
              {
                i.spotlights.map((s,i) => {
                  return (
                    <div className='spotlight'>
                      <h5>Portfolio Spotlight: {s.title}</h5>
                      <div className='spotlightDesc'>{s.description}</div>
                      <img src={s.img} key={i} alt='spotlight' ></img>
                    </div>
                  )
                })
              }
              </div>
            :
            null
          }

          <hr/>
		      <Link className='back' to="/portfolio">Back to Portfolio</Link>
        </div>
      </div>
    )
  }
}

export default Details
