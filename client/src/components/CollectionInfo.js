import React from 'react'
import { Box, Text, Divider, Heading, Badge } from 'rebass'

const CollectionInfo = ({ info, status, updateStatus }) => {
  return (
    <Box width={[ 1, null, 1 / 2, 1 / 3 ]} mt={[ 30, 10 ]} p={[ 1, 2, 3 ]}>
      <Heading style={{display: 'inline'}}>{info.title}</Heading>
      <Divider />
      <Text mt={1}>Year: <strong>{info.year}</strong></Text>
      <Text mt={1}>Status: <strong>{info.status}</strong></Text>
      <Text mt={1}>Episodes: <strong>{info.aired_episodes}</strong></Text>
      <Text mt={3}>{info.overview}</Text>
      <Badge mt={3} style={{backgroundColor: '#79FFE1', color: '#000'}}>watch</Badge>
      {/* <ButtonCircle type='submit' bg='black' mt={15} onClick={updateStatus}>{status}</ButtonCircle> */}
    </Box>
  )
}

export default CollectionInfo
