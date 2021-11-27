import React, { useState, useEffect } from 'react'
import helperFetch from '../helpers/HelperFetch'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState([])
  const parkId = props.match.params.id

  useEffect(() => {
    helperFetch(`/api/v1/parks/${parkId}`).then(parkData => {
      console.log(parkData)
      setPark(parkData)

    })
  }, [])

  // useEffect(() => {
  //   helperFetch(`/api/v1/parks/${parkId}`).then(parkData => {
  //     setPark(parkData.park)
  //   })

  // }, [])

  return (
    <div>
      {park.code}
    </div>
  )
}

export default ParkShowContainer