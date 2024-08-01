import "./styles/app.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import RoomSelect from "./components/RoomSelect";
import Range from "./components/Range";
import images from "./helpers/roomImages";

function App() {
  /*   const [count, setCount] = useState(0) */

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
    </div>
  );
}

export default App;
