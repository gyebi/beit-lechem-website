
import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'

function App() {
  const [showHome, setShowHome] = useState(false)

  return showHome ? <Home /> : <Landing onExplore={() => setShowHome(true)} />
}

export default App
