import React, { Component } from 'react'
import { loginUser } from './auth'
import { Input, ButtonCircle, Label, Flex, Box } from 'rebass'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
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
        email: this.state.email,
        password: this.state.password
      }
    }

    loginUser(credentials).then((auth) => {
      localStorage.setItem('token', auth.token)
      // console.log(localStorage.getItem('token'))
    }).then(this.props.history.push('/'))
  }

  render () {
    if (localStorage.getItem('token')) {
      return <h1>Hello</h1>
    } else {
      return (
        <Flex>
          <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
            <form onSubmit={this.handleOnSubmit}>
              <Label mt={1}>Email</Label>
              <Input type='text' name='email' value={this.state.email} onChange={this.handleOnChange} />
              <Label mt={1}>Password</Label>
              <Input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} />
              <ButtonCircle type='submit' bg='black' mt={15}>Login</ButtonCircle>
            </form>
          </Box>
        </Flex>
      )
    }
  }
}
