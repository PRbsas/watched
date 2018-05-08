import React, { Component } from 'react'
import { searchShows } from '../actions/search'
import { Input, ButtonCircle, Label, Flex, Box, Container } from 'rebass'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'

class Search extends Component {
  constructor () {
    super()

    this.state = {
      query: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.searchShows(this.state.query)
    this.setState({
      query: ''
    })
  }

  render () {
    return (
      <Container px={-3}>
        <Flex>
          <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
            <form onSubmit={this.handleOnSubmit}>
              <Label mt={1}>What show do you want to track?</Label>
              <Input type='text' name='query' value={this.state.query} onChange={this.handleOnChange}/>
              <ButtonCircle type='submit' bg='black' mt={15}>Search</ButtonCircle>
            </form>
          </Box>
        </Flex>
        <Flex >
          <SearchResults />
        </Flex>
      </Container>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchShows
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(Search)
