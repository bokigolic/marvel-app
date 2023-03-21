import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { apiUrlMarvelCharacters } from '../utils/marvel-url-utils';
import './App.css';
import PageHeros from './PageHeros';
import PageHeroSingle from './PageHeroSingle';

/*
https://developer.marvel.com/account
https://developer.marvel.com/documentation/authorization
https://developer.marvel.com/docs

MDP hash generator
https://www.md5hashgenerator.com/
*/



function App() {
  const navigate = useNavigate();
  const [heros, setHeros] = useState([])

  const handleClickLogo = (e) => {
    navigate("/");
  }

  useEffect(() => {
    console.log('we will fetch characters');
    axios.get(apiUrlMarvelCharacters())
      .then((response) => {
        console.log('response', response);
        if (response && response.data && response.data.data && Array.isArray(response.data.data.results)) {
          setHeros(response.data.data.results)
        }
      })

  }, [])

  return (
    <div className="App">
      <div onClick={handleClickLogo}>LOGO</div>
      <Routes>
        <Route
          path="/"
          element={<PageHeros heros={heros} />}
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
