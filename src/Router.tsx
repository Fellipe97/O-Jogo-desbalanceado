import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { SelectionFighters } from './pages/SelectionFighters'
import { GameConfig } from './pages/GameConfig'



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
      <Route
        path="/gameConfig"
        element={<GameConfig />}
      />

    </Routes>
  )
}
