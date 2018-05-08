import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonCircle } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser } from '../actions/users/sessions'

class Nav extends Component {
  logOut = (event) => {
    event.preventDefault()
    this.props.logOutUser()
    this.props.history.push('/')
  }

  render () {
    if (this.props.logged_in) {
      return (
        <ul className='nav'>
          <li><NavLink to='/search'><ButtonCircle bg='black'>Search</ButtonCircle></NavLink></li>
          <li><NavLink to='/dashboard'><ButtonCircle bg='black'>Dashboard</ButtonCircle></NavLink></li>
          <li><NavLink to='/logout'><ButtonCircle bg='black' onClick={this.logOut}>Log Out</ButtonCircle></NavLink></li>
        </ul>
      )
    } else {
      return (
        <ul className='nav'>
          <li><NavLink to='/signup'><ButtonCircle bg='black'>Sign Up</ButtonCircle></NavLink></li>
          <li><NavLink to='/login'><ButtonCircle bg='black'>Log In</ButtonCircle></NavLink></li>
        </ul>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { logged_in: state.session }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOutUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Nav)
