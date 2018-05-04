import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonCircle } from 'rebass'
import { connect } from 'react-redux'

class Nav extends Component {
  render () {
    if (this.props.logged_in) {
      return (
        <ul className='nav'>
          <li><NavLink to='/search'><ButtonCircle bg='black'>Search</ButtonCircle></NavLink></li>
          <li><NavLink to='/dashboard'><ButtonCircle bg='black'>Dashboard</ButtonCircle></NavLink></li>
        </ul>
      )
    } else {
      return (
        <ul className='nav'>
          <li><NavLink to='/signup'><ButtonCircle bg='black'>Sign Up</ButtonCircle></NavLink></li>
          <li><NavLink to='/login'><ButtonCircle bg='black'>Login</ButtonCircle></NavLink></li>
        </ul>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(Nav)
