import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchShowInfo } from '../actions/shows'
import { clearResults } from '../actions/search'
import { addShowToCollection } from '../actions/collection'
import ResultItem from '../components/search/ResultItem'
import ShowInfo from '../components/ShowInfo'

class SearchResults extends Component {
  state = {
    toDashboard: false
  }

  componentDidMount () {
    this.props.actions.clearResults()
  }

  addShow = (event) => {
    event.preventDefault()
    this.props.actions.addShowToCollection(this.props.showInfo)
    this.setState(() => ({ toDashboard: true }))
  }

  render () {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <Flex flexWrap='wrap' width={1}>
        <Box width={[ 1, null, 1 / 2, null ]} mt={[ 10, 30 ]}>
          { this.props.shows.map(show => <ResultItem key={show.show.ids.trakt} show={show} />) }
        </Box>
        <Box width={[ 1, null, 1 / 2, null ]} mt={[ 10, 30 ]}>
          {this.props.showInfo && <ShowInfo key={this.props.showInfo.ids.imdb} showInfo={this.props.showInfo} addShow={this.addShow} />}
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.search.shows,
    showInfo: state.show.showInfo
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchShowInfo: bindActionCreators(fetchShowInfo, dispatch),
      addShowToCollection: bindActionCreators(addShowToCollection, dispatch),
      clearResults: bindActionCreators(clearResults, dispatch)
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchResults)
