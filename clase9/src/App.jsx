import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Layout from "./pages/Layout";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:productoId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<div>404 no encontrado</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
