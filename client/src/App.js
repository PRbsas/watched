import React, { Component } from 'react'
import './App.css'
import { Provider, Heading } from 'rebass'

class App extends Component {
  render () {
    return (
      <Provider className='App'>
        <Heading>Watch<sup>ed</sup></Heading>
      </Provider>
    )
  }
}

export default App
