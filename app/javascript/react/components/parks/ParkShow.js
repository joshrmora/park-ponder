import React, { useState, useEffect } from 'react'

const ParkShow = (props) => {

  const { park } = props

  let image
  image = <img className="band-tile-image" src={park.image} />

  return(
    <div class="show-container">
      <div class="show-image">
        {image}
      </div>
      <h1 class="show-name">
        {park.name}
      </h1>
      <h2 class="show-description">
        <p className="show-location">{park.city}, {park.state}</p>
        <p>{park.description}</p>
      </h2>
    </div>
  )
}

export default ParkShow