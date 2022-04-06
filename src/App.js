import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME}>

      </Route>
      <Route path='/user'>
        <h1>Dikke vette huts</h1>
      </Route>
    </Routes>
  )
}
