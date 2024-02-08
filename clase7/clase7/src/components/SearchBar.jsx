import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ enSubmit }) {
  const [term, setTerm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    enSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }; //funcion que actualiza la variable de estado

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Ingrese su búsqueda</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;

// cuando se manipulen inputs mejor trabajar con variables de estado USESTATE
