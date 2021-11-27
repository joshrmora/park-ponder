import React, { useState, useEffect } from 'react'
import helperFetch from '../helpers/HelperFetch'
import ParkShow from './ParkShow'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState([])
  const parkId = props.match.params.id

  useEffect(() => {
    helperFetch(`/api/v1/parks/${parkId}`).then(parkData => {
      setPark(parkData)

    })
  }, [])

  return (
    <div>
      <ParkShow
        park={park}
      />
    </div>
  )
}

export default ParkShowContainer