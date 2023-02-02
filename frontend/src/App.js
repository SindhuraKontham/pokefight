import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ListPage from "./ListPage";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
import User from "./components/User";
import CreateNewUser from "./components/CreateNewUser";
import PokeCart from './components/PokeCart';
import PokemonInfo from './components/PokemonInfo';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/pokemon")
      .then((res) => {
        const response = res.data;
        setPokemons(response);
        console.log(response);
        return response;
      })
      .then((response) => {
        setSearchResults(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>

      {/* <div>
        <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      </div>
      <div>
        <ListPage searchResults={searchResults} />
      </div> */}
    
      <Header />
      
      <Routes>
      <Route path="/pokemon" element={<Pokemon pokemonId={Math.floor(Math.random()*1000)}/>} />
        <Route path="/" element={<User />} />
        <Route path="/CreateUser" element={<CreateNewUser />} />
        <Route path="/pokemons" element={<PokemonInfo cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<PokeCart cart={cart} setCart={setCart} />} />
      </Routes>
      {/* to be children of sindhuras component in new Route:"/" */}
      <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}

export default App;
