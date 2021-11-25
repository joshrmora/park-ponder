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
      <div className="cell small-4">
        <ParkTile
          park={park}
        />
      </div>
    )
  })

  return (
    <h1>{parkTiles}</h1>
  )
}

export default ParksIndexPage