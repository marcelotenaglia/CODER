import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './components/Cards'
import AlexaImg from "./img/alexa.png"
import SiriImg from "./img/siri.png"
import CortanaImg from "./img/cortana.png"

function App() {

  
  

  return (

    <div>

      <h1>Asistentes</h1>
      <Cards title="Alexa" arroba="@ThisIsAlexa" img={AlexaImg}/>
      <Cards title="Siri" arroba="@ImSiri" img={SiriImg}/>
      <Cards title="Cortana" arroba="@HelloSoyCortana" img={CortanaImg}/>

    </div>

  )
}

export default App
