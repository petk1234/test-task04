import React from "react";
import Header from "./components/header/Header";
import Slider from "./components/organisms/Slider";
import FavouritePage from "./components/favourites/FavouritePage";
import { useSetRecoilState, useRecoilState } from "recoil";
import { state } from "./server/serverState";
import { Route, Routes } from "react-router-dom";
function App() {
  const [launchesList, setLaunchesList] = useRecoilState(state);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/favourites" element={<FavouritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
