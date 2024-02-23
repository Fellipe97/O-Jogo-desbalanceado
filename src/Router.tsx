import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { SelectionFighters } from './pages/SelectionFighters'



export function Router() {



  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/selectionFighters"
        element={<SelectionFighters />}
      />

    </Routes>
  )
}
