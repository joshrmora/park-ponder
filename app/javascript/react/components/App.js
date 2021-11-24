import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ParksIndexPage from './parks/ParksIndexPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ParksIndexPage} />
      </Switch>
    </BrowserRouter>)
}

export default App
