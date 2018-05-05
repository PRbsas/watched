import React from 'react'
import Show from './Show'
import { Box } from 'rebass'

const ShowList = ({ shows }) => {
  return (
    <Box width={1} mt={[ 10, 30 ]}>
      {/* { shows.map(show => (
        <Text>{show.show.title}</Text>
      ))} */}
      { shows.map(Show) }
    </Box>

  )
}

export default ShowList
