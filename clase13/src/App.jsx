import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [itemList, setItemList] = useState([]);
  const [newName, setNewName] = useState([""]);
  const [newPrice, setNewPrice] = useState([0]);
  const [newStock, setNewStock] = useState([0]);
  const [updatedName, setUpdatedName] = useState([""]);

  const itemsCollectionRef = collection(db, "Item");

  const getItemList = async () => {
    const data = await getDocs(itemsCollectionRef);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setItemList(filteredData);
  };

  useEffect(() => {
    getItemList();
  }, []);

  const onSubmitItem = async () => {
    if (newName != "") {
      await addDoc(itemsCollectionRef, {
        nombre: newName,
        precio: newPrice,
        stock: newStock,
      });
      getItemList();
    }
  };

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "Item", id); //doc trae la referencia de un documento, sirve para traer el id

    await deleteDoc(itemDoc);

    getItemList();
  };

  const updatedItem = async (id) => {
    const itemDoc = doc(db, "Item", id);
    await updateDoc(itemDoc, { nombre: updatedName });
    getItemList();
  };

  return (
    <div>
      <div>
        <h2>Nuevo Producto</h2>
        <input
          placeholder="Nombre"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          placeholder="Precio"
          onChange={(e) => setNewPrice(Number(e.target.value))}
        />
        <input
          placeholder="Stock"
          onChange={(e) => setNewStock(Number(e.target.value))}
        />
        <button onClick={onSubmitItem}>Enviar</button>
      </div>

      {itemList.map((item) => (
        <div key={item.id}>
          <h2>Nombre: {item.nombre}</h2>
          <p>Precio: {item.precio}</p>
          <p>Stock: {item.stock}</p>
          <button onClick={() => deleteItem(item.id)}>Borrar</button>
          <input
            placeholder="Modificar"
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <button onClick={() => updatedItem(item.id)}>Modificar</button>
        </div>
      ))}
    </div>
  );
}

export default App;
