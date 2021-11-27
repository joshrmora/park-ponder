import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {

  const {park} = props

  let image
  image = <img className="band-tile-image" src={park.image}/>

  return (
    <Link to = {`/parks/${park.id}`}>
      <div className="park-tile cell small-6">
        <div className="park-tile-image">
          {image}
        </div>
        <div className="park-name">
          {park.name}
        </div>
      </div>
    </Link>
  )
}

export default ParkTile