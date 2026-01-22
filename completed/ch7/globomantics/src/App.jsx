import Banner from "./components/Banner"
import House from "./components/House"
import HouseList from "./components/HouseList";
import { useState } from "react";
import "./App.css"

function App() {
  const [selectedHouse, setSelectedHouse] = useState();
  const setSelectedHouseWrapper = (house) => {
    // validate house object
    setSelectedHouse(house);
  };

  return (
    <>
      <Banner>Providing houses all over the world</Banner>
      {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouseWrapper}/>}
    </>
  )
}

export default App