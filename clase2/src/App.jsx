import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const nombre = "Santete";
  const apellido = "Iparraguirre";

  return (
    <div>

      <h1 style={{color : "grey", fontSize : "60px"}}>Bienvenido {nombre} {apellido}</h1>
      <h2 style={{color : "red", fontSize : "50px"}}>proba con esto 🛠</h2>
      <button>toca aca si sos vago</button>

    </div>
  )
}

export default App
