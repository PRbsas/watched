import React, { Component } from 'react'
import { loginUser } from '../../actions/users/sessions'
import { Input, ButtonCircle, Label, Flex, Box } from 'rebass'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    const user = this.state.user
    user[event.target.name] =  event.target.value
    return this.setState({
      user: user
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  render () {
    if (this.props.logged_in) {
      return <Redirect to='/' />
    } else {
      return (
        <Flex>
          <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
            <form onSubmit={this.handleOnSubmit}>
              <Label mt={1}>Email</Label>
              <Input type='text' name='email' value={this.state.user.email} onChange={this.handleOnChange} />
              <Label mt={1}>Password</Label>
              <Input type='password' name='password' value={this.state.user.password} onChange={this.handleOnChange} />
              <ButtonCircle type='submit' bg='black' mt={15}>Login</ButtonCircle>
            </form>
          </Box>
        </Flex>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { logged_in: state.session }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login)
