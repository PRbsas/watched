import React, { Component } from 'react'
import { Flex, Box, Text } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCollection } from '../actions/collection'

class Dashboard extends Component {
  componentDidMount () {
    this.props.actions.fetchCollection()
  }

  render () {
    return (
      <Flex flexWrap='wrap' width={1}>
        <Box width={[ 1, 1 / 2, 1 / 3 ]} mt={[ 10, 30 ]}>
          {this.props.collection.map(show => <Text key={show.id}>{show.title}</Text>)}
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collection: state.collection.myCollection
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchCollection: bindActionCreators(fetchCollection, dispatch)
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)
