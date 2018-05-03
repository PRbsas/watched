import React, { Component } from 'react'
import { signUpUser } from './auth'
import { Input, ButtonCircle, Label, Flex, Box } from 'rebass'

export default class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const credentials = {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    }

    signUpUser(credentials).then((auth) => {
      localStorage.setItem('token', auth.token)
      // console.log(localStorage.getItem('token'))
    }).then(this.props.history.push('/'))
  }

  render () {
    return (
      <Flex>
        <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
          <form onSubmit={this.handleOnSubmit}>
            <Label mt={1}>Username</Label>
            <Input type='text' name='username' value={this.state.username} onChange={this.handleOnChange} />
            <Label mt={1}>Email</Label>
            <Input type='text' name='email' value={this.state.email} onChange={this.handleOnChange} />
            <Label mt={1}>Password</Label>
            <Input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} />
            <ButtonCircle type='submit' bg='black' mt={15}>Sign Up</ButtonCircle>
          </form>
        </Box>
      </Flex>
    )
  }
}