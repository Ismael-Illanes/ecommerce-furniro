import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import RoomSelect from "./components/RoomSelect";
import Range from "./components/Range";
import images from "./helpers/roomImages";
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/mocks/products.JSON");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="root">
      <Banner>
        <Header />
        <Modal />
      </Banner>
      <Range>
        <RoomSelect imgSrc={images.dinningRoom} text="Dining" />
        <RoomSelect imgSrc={images.livingRoom} text="Living" />
        <RoomSelect imgSrc={images.bedRoom} text="Bedroom" />
      </Range>
      <Catalogue>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Catalogue>
    </div>
  );
}

export default App;
