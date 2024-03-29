import { useState } from 'react'
import './App.css'
import { ComponentIzquierda } from './components/ComponentIzquierda'
import { ComponentCentro } from './components/ComponentCentro'
import { ComponentDerecho } from './components/ComponentDerecho'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= "container">
    <ComponentIzquierda />
    <ComponentCentro />
    <ComponentDerecho />
    </div>
  )
}

export default App