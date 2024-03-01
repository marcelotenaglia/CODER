import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const itemsCollectionRef = collection(db, "Item");

  useEffect(() => {
    const getItemList = async () => {
      const data = await getDocs(itemsCollectionRef);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      console.log(filteredData);
    };
    getItemList();
  }, []);

  return <div></div>;
}

export default App;
