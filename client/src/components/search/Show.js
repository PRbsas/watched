import React from 'react'
import { Box, Text, ButtonCircle } from 'rebass'

const Show = props => {
  return (
    <Box width={1} mt={[ 10, 30 ]} key={props.show.ids.slug}>
      <Text>{props.show.title}</Text>
      <ButtonCircle type='submit' bg='black' mt={15}>Add</ButtonCircle>
    </Box>
  )
}

export default Show
