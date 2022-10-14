import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentPage } from "./server/appState";
import HomePage from "./components/pages/HomePage";
import FavouritePage from "./components/pages/FavouritePage";
import "./styles.css";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const [pageType, setCurrentPage] = useRecoilState(currentPage);
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentPage("");
    navigate("/");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favourites" element={<FavouritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
