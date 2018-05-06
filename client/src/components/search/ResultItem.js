import React, { Component } from 'react'
import { Box, Text, ButtonCircle } from 'rebass'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchShowInfo } from '../../actions/shows'
import { addShowToCollection } from '../../actions/collection'

class ResultItem extends Component {
  handleOnClick = (event) => {
    event.preventDefault()
    this.props.actions.fetchShowInfo(this.props.show.show.ids.slug)
   //this.addShowToCollection(this.props.show.show)
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
  return {
    actions: {
      fetchShowInfo: bindActionCreators(fetchShowInfo, dispatch),
      addShowToCollection: bindActionCreators(addShowToCollection, dispatch)
    }
  }
}

export default connect(null, matchDispatchToProps)(ResultItem)
