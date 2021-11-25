import React, { useState, useEffect } from 'react'
import helperFetch from '../helpers/HelperFetch'
import ParkTile from './ParkTile'

const ParksIndexPage = (props) => {
  const [parks, setParks] = useState([])
  useEffect(() => {
    helperFetch('api/v1/parks').then(parksData => {
      setParks(parksData)
    })
  }, [])

  const parkTiles = parks.map((park) => {
    return (
      <ParkTile
        park={park}
      />
    )
  })

  return (
    <div className="park-tile-container" >
      <div className="grid-x grid-margin-x grid-margin-10 space">
        {parkTiles}
      </div>
    </div>
  )
}

export default ParksIndexPage