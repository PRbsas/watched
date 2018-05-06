import React from 'react'
import { Blockquote } from 'rebass'

const Stats = ({ count }) => {
  return (
    <Blockquote fontSize={[ 16, 24 ]} mt={10} fontWeight='400'>You are tracking {count} shows.</Blockquote>
  )
}

export default Stats
