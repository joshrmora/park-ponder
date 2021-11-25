import React, { useState, useEffect } from 'react'

const ParkTile = (props) => {

  const {park} = props

  let image
  image = <img className="band-tile-image" src={park.image}/>

  return (

    <div className="park-tile cell small-6">
      <div className="park-tile-image">
        {image}
      </div>
      <div className="park-name">
        {park.name}
      </div>
    </div>
  )
}

export default ParkTile