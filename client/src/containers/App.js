import React from 'react'
import { Provider, Container } from 'rebass'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Login from '../components/users/Login'
import SignUp from '../components/users/SignUp'

import '../App.css'

const App = props => {
  return (
    <Router>
      <Provider theme={{
        fonts: { sans: '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif' }
      }}>
        <Container>
          <Header />
          <Route exact path='/' component={Nav} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Container>
      </Provider>
    </Router>
  )
}

export default App
