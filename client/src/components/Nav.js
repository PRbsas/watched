import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonCircle } from 'rebass'

const Nav = () => {
  return (
    <ul className='nav'>
      <li><NavLink to='/signup'><ButtonCircle bg='black'>Sign Up</ButtonCircle></NavLink></li>
      <li><NavLink to='/login'><ButtonCircle bg='black'>Login</ButtonCircle></NavLink></li>
    </ul>
  )
}

export default Nav
