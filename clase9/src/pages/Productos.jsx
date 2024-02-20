import { Link } from "react-router-dom";
import listaProductos from "../data";
import "./Productos.css";

function Productos() {
  return (
    <div>
      <h1>Productos</h1>
      <div className="galeria">
        {listaProductos.map((producto) => {
          return (
            <article key={producto.id}>
              <h5>{producto.title}</h5>
              <img
                className="img"
                src={producto.image}
                alt={producto.description}
              />
              <Link to={`/productos/${producto.id}`}>Mas info</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Productos;
