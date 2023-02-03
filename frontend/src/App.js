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
import PokeCart from "./components/PokeCart";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users/active");
        setActiveUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/pokemon")
  //     .then((res) => {
  //       const response = res.data;
  //       setPokemons(response);
  //       console.log(response);
  //       return response;
  //     })
  //     .then((response) => {
  //       setSearchResults(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      {/* <div>
        <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      </div>
      <div>
        <ListPage searchResults={searchResults} />
      </div> */}

      <Header activeUser={activeUser} setActiveUser={setActiveUser} />

      <Routes>
        <Route
          path="/pokemon"
          element={<Pokemon pokemonId={Math.floor(Math.random() * 1000)} />}
        />
        <Route path="/" element={<User setActiveUser={setActiveUser} />} />
        <Route
          path="/CreateUser"
          element={<CreateNewUser setActiveUser={setActiveUser} />}
        />
        <Route
          path="/pokemons"
          element={<PokemonInfo cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<PokeCart cart={cart} setCart={setCart} />}
        />
      </Routes>
      {/* to be children of sindhuras component in new Route:"/" */}
      <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}

export default App;
