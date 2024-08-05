import React, { useState, useEffect } from "react";

/* FRAMEWORKS */

import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

/* COMPONENTS */
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import RoomSelect from "./components/RoomSelect";
import Range from "./components/Range";
import Idioms from "./components/Idioms";

/* STYLES AND IMAGES */
import "./styles/app.scss";
import images from "./helpers/roomImages";

/* #################################################### */

function App() {
  /* CONSTS */

  const [products, setProducts] = useState([]);

  /* #################################################### */

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
    <I18nextProvider i18n={i18n}>
      <div id="root">
        <Idioms />
        <Banner>
          <Header />
        </Banner>
        <Range>
          <RoomSelect imgSrc={images.dinningRoom} text="rooms.dining" />
          <RoomSelect imgSrc={images.livingRoom} text="rooms.living" />
          <RoomSelect imgSrc={images.bedRoom} text="rooms.bedroom" />
        </Range>
        <Catalogue>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </Catalogue>
        <Modal />
      </div>
    </I18nextProvider>
  );
}

export default App;
