import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonCircle } from 'rebass'
import { connect } from 'react-redux'

class Nav extends Component {
  render () {
    if (this.props.logged_in) {
      return <h1>You are logged_in</h1>
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

export default connect(mapStateToProps, null)(Nav)
