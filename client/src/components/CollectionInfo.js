import React, { Component } from 'react'
import { Box, Text, Divider, Heading, Badge, ButtonCircle } from 'rebass'

export default class CollectionInfo extends Component {
  constructor () {
    super()

    this.state = {
      counter: 0
    }
  }

  updateLikes = () => {
    this.setState({
      counter: this.state.counter + 1
    })
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
        <ButtonCircle type='submit' bg='black' mt={15} onClick={this.updateLikes}>{this.state.counter}</ButtonCircle>
      </Box>
    )
  }
}
