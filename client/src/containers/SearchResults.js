import React, { Component } from 'react'
import { Box } from 'rebass'
import { connect } from 'react-redux'
import ResultItem from '../components/search/ResultItem'

class SearchResults extends Component {
  render () {
    return (
      <Box width={1} mt={[ 10, 30 ]}>
        { this.props.shows.map(show => <ResultItem key={show.show.ids.slug} show={show} />) }
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.search.shows
  }
}

export default connect(mapStateToProps)(SearchResults)
