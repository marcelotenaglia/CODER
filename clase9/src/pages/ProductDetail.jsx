import { Link, useParams } from "react-router-dom";
import listaProductos from "../data";
import "./Productos.css";

function ProductDetail() {
  const { productoId } = useParams();
  const producto = listaProductos.find((prod) => prod.id == productoId);
  const { image, title, price } = producto;
  return (
    <div>
      <article>
        <img src={image} />
        <h2>{title}</h2>
        <h3>${price}</h3>
        <Link to="/productos">volver</Link>
      </article>
    </div>
  );
}

export default ProductDetail;
