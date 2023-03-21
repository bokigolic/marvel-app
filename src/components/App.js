import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import PageHeros from './PageHeros';
import PageHeroSingle from './PageHeroSingle';

function App() {
  const navigate = useNavigate();

  const handleClickLogo = (e) => {
    navigate("/");
  }

  return (
    <div className="App">
      <div onClick={handleClickLogo}>LOGO</div>
      <Routes>
        <Route
          path="/"
          element={<PageHeros />}
        />
        <Route
          path="/hero/:id"
          element={<PageHeroSingle />}
        />
        <Route
          path="*"
          element={<div>ROUTE NOT FOUND</div>}
        />

      </Routes>
    </div>
  );
}

export default App;
