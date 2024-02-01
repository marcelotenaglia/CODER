import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log("se ejecuto useEffect");
  }, [counter1]);

  return (
    <>
      <div>
        <div>
          <h2>contador 1</h2>
          <button onClick={() => setCounter1(counter1 + 1)}>+</button>
          <h3>{counter1}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
