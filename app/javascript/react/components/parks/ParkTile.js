import React, { useState, useEffect } from 'react'

const ParkTile = (props) => {

  const {park} = props
  return (
    <div>
      <h1>{park.name}</h1>
    </div>
  )
}

export default ParkTile