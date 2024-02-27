import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Acordeon from "./components/Acordeon";

function App() {
  const items = [
    {
      id: "1",
      label: "Frases de Apu",
      content: "Vuelva prontos",
    },
    {
      id: "2",
      label: "Frases de Milhouse",
      content: "Mis anteojos",
    },
    {
      id: "3",
      label: "Frases de Nelson",
      content: "HA HA",
    },
  ];

  return <Acordeon items={items} />;
}

export default App;
