import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImg from "./api";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    let result = await searchImg(term);
    setImages(result);
  };

  return (
    <>
      <div>
        <SearchBar enSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
    </>
  );
}

export default App;
