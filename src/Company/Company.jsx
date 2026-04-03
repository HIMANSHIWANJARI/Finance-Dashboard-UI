import React from 'react'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import './Company.scss'

function Company({image,company,total}) {
  return (
    <div className='company'>
      <StarOutlineOutlinedIcon className='icons'/>
      <p className='rank'>{company}</p>
      <li>{total}</li>
    </div>
  )
}

export default Company
