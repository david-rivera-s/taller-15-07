import { useState } from 'react'
import './App.css'
import { TablaPeliculas } from './components/TablaPeliculas'
import { peliculas } from './data/peliculas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TablaPeliculas peliculas={peliculas} />      
    </>
  )
}

export default App
