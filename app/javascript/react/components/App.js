import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ParksIndexPage from './parks/ParksIndexPage'
import ParkShowContainer from './parks/ParkShowContainer'
import LandingPage from './parks/LandingPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/parks" component={ParksIndexPage} />
        <Route exact path="/parks/:id" component={ParkShowContainer} />
      </Switch>
    </BrowserRouter>)
}

export default App
