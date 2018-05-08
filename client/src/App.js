import React, { Component } from 'react'
import { Provider, Container } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { fetchCollection } from './actions/collection'
import Header from './components/Header'
import Nav from './components/Nav'
import Login from './components/users/Login'
import SignUp from './components/users/SignUp'
import Search from './containers/Search'
import Dashboard from './containers/Dashboard'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.actions.fetchCollection()
  }
  render () {
    return (
      <Router>
        <Provider theme={{
          fonts: { sans: '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif' }
        }}>
          <Container>
            <Header />
            <Route path='/' component={Nav} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Container>
        </Provider>
      </Router>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchCollection: bindActionCreators(fetchCollection, dispatch)
    }
  }
}

export default connect(null, matchDispatchToProps)(App)
