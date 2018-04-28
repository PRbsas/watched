import React from 'react'
import { Provider, Container } from 'rebass'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logo from '../components/Logo'
import Quote from '../components/Quote'

const App = props => {
  return (
    <Router>
      <Provider theme={{
        fonts: { sans: '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif' }
      }}>
        <Container>
          <Logo />
          <Route exact path='/' component={Quote} />
        </Container>
      </Provider>
    </Router>
  )
}

export default App
