import React from 'react'
import { Box, Text, ButtonCircle } from 'rebass'

const ShowInfo = ({ showInfo, addShow }) => {
  return (
    <Box width={1} mt={[ 10, 30 ]}>
      <Text>{showInfo.overview}</Text>
      <ButtonCircle type='submit' bg='black' mt={15} onClick={addShow}>Add</ButtonCircle>
    </Box>
  )
}

export default ShowInfo
