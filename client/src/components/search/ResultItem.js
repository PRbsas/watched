import React, { Component } from 'react'
import { Box, Text, ButtonCircle } from 'rebass'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchShowInfo } from '../../actions/shows'

class ResultItem extends Component {
  handleOnClick = (event) => {
    event.preventDefault()
    this.props.fetchShowInfo(this.props.show.show.ids.slug)
  }

  render () {
    const show = this.props.show.show
    return (
      <Box width={1} mt={15} key={show.ids.slug}>
        <Text>{show.title} - ({show.year})</Text>
        <ButtonCircle type='submit' bg='black' px={2} py={2} mt={2} fontSize={12} onClick={this.handleOnClick}>Show More</ButtonCircle>
      </Box>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return { fetchShowInfo: bindActionCreators(fetchShowInfo, dispatch) }
}

export default connect(null, matchDispatchToProps)(ResultItem)
