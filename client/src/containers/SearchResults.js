import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchShowInfo } from '../actions/shows'
import { addShowToCollection } from '../actions/collection'
import ResultItem from '../components/search/ResultItem'
import ShowInfo from '../components/ShowInfo'

class SearchResults extends Component {
  addShow = (event) => {
    event.preventDefault()
    this.props.actions.addShowToCollection(this.props.showInfo)
  }

  render () {
    return (
      <Flex flexWrap='wrap' width={1}>
        <Box width={[ 1, null, 1 / 2, null ]} mt={[ 10, 30 ]}>
          { this.props.shows.map(show => <ResultItem key={show.show.ids.slug} show={show} />) }
        </Box>
        <Box width={[ 1, null, 1 / 2, null ]} mt={[ 10, 30 ]}>
          {this.props.showInfo && <ShowInfo showInfo={this.props.showInfo} addShow={this.addShow} />}
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
      addShowToCollection: bindActionCreators(addShowToCollection, dispatch)
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchResults)
