import React from 'react'
import { Link } from 'react-router'

import '../css/nav.css'

const ListItem = (i) => {
  const iconStyle={
    backgroundImage:`url(${i.item.icon})`
  }
  const details = `/portfolio/${i.item.slug}`
  return (
    <Link to={details}>
      <div className='icon' style={iconStyle}></div>
      <div className='description'>
				<h4>{i.item.title}</h4>
				{i.item.description}
			</div>
    </Link>
  )
}

export default ListItem
