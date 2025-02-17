import { useState, useEffect } from "react";

/* FRAMEWORKS */
import { useTranslation, I18nextProvider } from "react-i18next";

/* COMPONENTS */
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import RoomSelect from "./components/RoomSelect";
import AreaPicker from "./components/AreaPicker";
import Languages from "./components/Languages";
import ExploreMoreSection from "./components/ExploreMoreSection.jsx";

/* STYLES AND IMAGES */
import "./styles/app.scss";

/* CONSTANTS */
import { rooms } from "./config/constants.js";

/* #################################################### */

function App() {
  /* CONSTS */
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
    <I18nextProvider i18n={i18n}>
      <div id="root">
        <Languages />
        <Banner>
          <Header />
        </Banner>
        <AreaPicker>
          {rooms.map((room, index) => (
            <RoomSelect key={index} imgSrc={room.imgSrc} text={room.text} />
          ))}
        </AreaPicker>
        <Catalogue>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </Catalogue>
        <Modal />
        <ExploreMoreSection />
      </div>
    </I18nextProvider>
  );
}

export default App;
