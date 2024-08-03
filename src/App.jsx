import React, { useState, useEffect } from "react";

/* FRAMEWORKS */

import { useTranslation } from "react-i18next";

/* COMPONENTS */
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import RoomSelect from "./components/RoomSelect";
import Range from "./components/Range";

/* STYLES AND IMAGES */
import "./styles/app.scss";
import images from "./helpers/roomImages";

/* #################################################### */

function App() {
  /* CONSTS */
  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: " Spanish" },
  };
  const { i18n } = useTranslation();
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
    <div id="root">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <Banner>
        <Header />
        <Modal />
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
    </div>
  );
}

export default App;
