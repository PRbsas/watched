import React, { Component } from 'react'
import { Box, Text, Divider, Heading, Badge, ButtonCircle } from 'rebass'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addLike } from '../actions/collection'

class CollectionInfo extends Component {

  updateLikes = (id) => {
    this.props.actions.addLike(id)
  }

  render () {
    const { info } = this.props
    return (
      <Box width={[ 1, null, 1 / 2, 1 / 3 ]} mt={[ 30, 10 ]} p={[ 1, 2, 3 ]}>
        <Heading style={{display: 'inline'}}>{info.title}</Heading>
        <Divider />
        <Text mt={1}>Year: <strong>{info.year}</strong></Text>
        <Text mt={1}>Status: <strong>{info.status}</strong></Text>
        <Text mt={1}>Episodes: <strong>{info.aired_episodes}</strong></Text>
        <Text mt={3}>{info.overview}</Text>
        <Badge mt={3} style={{backgroundColor: '#79FFE1', color: '#000'}}>watch</Badge>
        <ButtonCircle type='submit' bg='black' mt={15} onClick={() => this.updateLikes(info.id)}>{info.likes ? parseInt(info.likes) : 0}</ButtonCircle>
      </Box>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    actions: {
      addLike: bindActionCreators(addLike, dispatch)
    }
  }
}

export default connect(null, matchDispatchToProps)(CollectionInfo)
