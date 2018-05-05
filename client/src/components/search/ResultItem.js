import React, { Component } from 'react'
import { Box, Text, ButtonCircle } from 'rebass'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchShow } from '../../actions/shows'

class ResultItem extends Component {
  handleOnClick = (event) => {
    event.preventDefault()
    this.props.searchShow(this.props.show.show.ids.slug)
  }

  render () {
    return (
      <Box width={1} mt={[ 10, 30 ]} key={this.props.show.show.ids.slug}>
        <Text>{this.props.show.show.title}- {this.props.show.show.year}</Text>
        <ButtonCircle type='submit' bg='black' mt={15} onClick={this.handleOnClick}>Add</ButtonCircle>
      </Box>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchShow
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(ResultItem)
