import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import User from "./components/User";
import CreateNewUser from "./components/CreateNewUser";
import PokeCart from "./components/PokeCart";
import PokemonInfo from "./components/PokemonInfo";
import Fight from "./components/Fight";
import Score from "./components/Score";

function App() {
  const [pokemons, setPokemons] = useState([]); // eslint-disable-next-line
  const [setSearch, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeUser, setActiveUser] = useState([]);
  const [pokemonsInfo, setPokemonsInfo] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users/active");
        const pokemon = await axios.get("http://localhost:3001/pokemon");
        const res = response.data;
        const respoke = pokemon.data;
        setActiveUser(res);
        setPokemons(respoke);
        return res, respoke;
        setPokemons(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);
  console.log(cart);

  const cartQuantity = cart.length;

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const quantity = cart.length;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <User setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        <Route path="/Score" element={<Score activeUser={activeUser} />} />

        <Route path="/Fight" element={<Fight activeUser={activeUser} />} />
        <Route
          path="/CreateUser"
          element={
            <CreateNewUser
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          }
        />
        <Route
          path="/pokemons"
          element={
            <PokemonInfo
              cart={cart}
              setCart={setCart}
              setSearchResults={setSearchResults}
              pokemonsInfo={pokemonsInfo}
              setPokemonsInfo={setPokemonsInfo}
              user={activeUser}
              setActiveUser={setActiveUser}
              cartQuantity={cartQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <PokeCart
              cart={cart}
              setCart={setCart}
              cartQuantity={cartQuantity}
              openCart={openCart}
              closeCart={closeCart}
              isOpen={isOpen}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
