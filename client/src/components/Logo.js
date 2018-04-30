import React from 'react'
import { Heading } from 'rebass'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <Heading fontSize={[ 40, 60, 80 ]} mt={[ 20, 40, 80 ]} fontWeight='400'>
      <NavLink to='/'>Watch<sup>ed</sup></NavLink>
    </Heading>
  )
}

export default Logo
