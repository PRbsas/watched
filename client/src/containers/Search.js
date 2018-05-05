import React, { Component } from 'react'
import { searchShows } from '../actions/search'
import { Input, ButtonCircle, Label, Flex, Box } from 'rebass'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ShowList from '../components/search/ShowList'

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
      <Flex>
        <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
          <form onSubmit={this.handleOnSubmit}>
            <Label mt={1}>What show do you want to track?</Label>
            <Input type='text' name='query' value={this.state.query} onChange={this.handleOnChange} />
            <ButtonCircle type='submit' bg='black' mt={15}>Search</ButtonCircle>
          </form>
          <ShowList shows={this.props.shows} />
          {/* {this.props.shows.map( show => { return <h3>{show.show.title}</h3> })} */}
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.search.shows,
    isFetching: state.search.isFetching
   }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchShows
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search)
