import React from 'react'
import imageLanding from '../../../../assets/images/park-ponder-transparent.png'

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img src={imageLanding}></img>
      <h2>Dwell in the outdoors.</h2>
      <h2>Make it home safe.</h2>
      <h2><a href="/parks">Ponder.</a></h2>
    </div>
  )
}

export default LandingPage