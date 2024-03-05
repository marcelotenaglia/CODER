import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cantidad, setCantidad] = useState(1);

  const agregar = () => {
    if (cantidad < 1000) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="button is-danger" onClick={quitar}>
          {" "}
          -{" "}
        </button>
        <h1 className="cantidad">cantidad: {cantidad} </h1>
        <button className="button is-link" onClick={agregar}>
          {" "}
          +{" "}
        </button> 
      </div>
      <div></div>
    </div>
  );
}

export default App;
