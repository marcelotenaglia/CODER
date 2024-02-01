import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <h1 className="title">Asistentes</h1>
        </div>
      </section>

      <div className="container">
        <section className="columns">
          <div className="column is-4">
            <Cards title="Alexa" arroba="@ThisIsAlexa" img={AlexaImg} />
          </div>

          <div className="column is-4">
            <Cards title="Siri" arroba="@ImSiri" img={SiriImg} />
          </div>

          <div className="column is-4">
            <Cards title="Cortana" arroba="@HelloSoyCortana" img={CortanaImg} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
