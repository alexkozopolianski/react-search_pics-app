import React, { useState, useEffect } from "react";
import unsplash from "./api/unsplash";
import "./App.css";

import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
