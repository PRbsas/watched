import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='nav'>
      <li><NavLink to='/signup'>signup</NavLink></li>
      <li><NavLink to='/login'>login</NavLink></li>
    </ul>
  )
}

export default Nav
