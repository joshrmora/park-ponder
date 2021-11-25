import React, { useState, useEffect } from 'react'

const ParkTile = (props) => {

  const {park} = props
  return (
    <div className="park-tile cell small-6">
      {park.name}
    </div>
  )
}

export default ParkTile