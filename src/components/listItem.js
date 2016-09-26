import React from 'react'
import '../less/nav.less'

const ListItem = (i) => {
  const iconStyle={
    backgroundImage:`url(${i.icon})`
  }
  return (
    <div>
      <div className='icon' style={iconStyle}></div>
      <div className='description'>
				<h4>{i.item.title}</h4>
				{i.item.description}
			</div>
    </div>
  )
}

export default ListItem
