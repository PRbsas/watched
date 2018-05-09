import React, { Component } from 'react'
import { Flex, Container } from 'rebass'
import { connect } from 'react-redux'
import Stats from '../components/Stats'
import CollectionInfo from '../components/CollectionInfo'

class Dashboard extends Component {
  render () {
    return (
      <Container mt={5}>
        <Stats count={this.props.collection.length} />
        <Flex flexWrap='wrap' width={1}>

          {/* {this.props.collection.map(show => <CollectionInfo key={show.id} info={show} />)} */}

          {
            this.props.collection.sort((a, b) => {
              return b.likes - a.likes
            }).map(show => <CollectionInfo key={show.id} info={show} />)
          }
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collection: state.collection.myCollection
  }
}

export default connect(mapStateToProps, null)(Dashboard)
