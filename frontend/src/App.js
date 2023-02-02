
import './App.css';
import PokemonInfo from './components/PokemonInfo';
import {Routes, Route} from 'react-router-dom';
import PokeCart from './components/PokeCart';
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    // <div className="App">
      <Routes>
      <Route path="/" element={<PokemonInfo cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<PokeCart cart={cart} setCart={setCart} />} />
      </Routes>
    // </div>
  );
}

export default App;
