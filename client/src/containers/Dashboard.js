import React, { Component } from 'react'
import { Flex, Container } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCollection } from '../actions/collection'
import Stats from '../components/Stats'
import CollectionInfo from '../components/CollectionInfo'

class Dashboard extends Component {
  componentDidMount () {
    this.props.actions.fetchCollection()
  }

  render () {
    return (
      <Container mt={5}>
        <Stats count={this.props.collection.length} />
        <Flex flexWrap='wrap' width={1}>
          {this.props.collection.map(show => <CollectionInfo key={show.id} info={show} status={this.props.status} />)}
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collection: state.collection.myCollection,
    status: state.collection.status
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
