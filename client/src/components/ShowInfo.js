import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, ButtonCircle, Divider, Heading } from 'rebass'

const ShowInfo = ({ showInfo, addShow }) => {
  return (
    <Box width={1} mt={[ 30, 0 ]} pl={10}>
      <Heading>{showInfo.title}</Heading>
      <Divider />
      <Text>Genres: <strong>{showInfo.genres.map(genre => <span key={genre}>{genre} </span>)}</strong></Text>
      <Text mt={1}>Year: <strong>{showInfo.year}</strong></Text>
      <Text mt={1}>Status: <strong>{showInfo.status}</strong></Text>
      <Text mt={1}>Episodes: <strong>{showInfo.aired_episodes}</strong></Text>
      <Text mt={3}>{showInfo.overview}</Text>
      <ButtonCircle type='submit' bg='black' mt={15} onClick={addShow}>Add</ButtonCircle>
    </Box>
  )
}

ShowInfo.propTypes = {
  showInfo: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number,
    status: PropTypes.string,
    episodes: PropTypes.number,
    overview: PropTypes.string
  }),
  addShow: PropTypes.func
}

export default ShowInfo
