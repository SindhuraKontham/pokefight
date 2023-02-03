import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
import User from "./components/User";
import CreateNewUser from "./components/CreateNewUser";
import PokeCart from "./components/PokeCart";
import PokemonInfo from "./components/PokemonInfo";

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
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/CreateUser" element={<CreateNewUser />} />
          <Route
            path="/pokemons"
            element={
              <PokemonInfo
                cart={cart}
                setCart={setCart}
                pokemons={pokemons}
                setSearchResults={setSearchResults}
              />
            }
          />
          <Route
            path="/pokemons/pokemon"
            element={<Pokemon pokemonId={Math.floor(Math.random() * 1000)} />}
          />
          <Route
            path="/cart"
            element={<PokeCart cart={cart} setCart={setCart} />}
          />
        </Routes>
        {/* to be children of sindhuras component in new Route:"/" */}
        {/* <ListPage searchResults={searchResults} /> */}
      </Container>
    </>
  );
}

export default App;
