import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Beers from './components/pages/Beers';
import CreateBeer from './components/pages/CreateBeer';
import RandomBeer from './components/pages/RandomBeer';
import Layout from './components/pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beers" element={<Beers />}></Route>
          <Route path="/random-beer" element={<RandomBeer />}></Route>
          <Route path="/new-beer" element={<CreateBeer />}></Route>
        </Route>
        <Route path='*' element={<h2>Error 404</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
