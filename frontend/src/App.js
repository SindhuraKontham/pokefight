import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
// import Pokemon from "./components/Pokemon";
import Header from "./components/Header";
import User from "./components/User";
import CreateNewUser from "./components/CreateNewUser";
import PokeCart from "./components/PokeCart";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [pokemons, setPokemons] = useState([]); // eslint-disable-next-line
  const [setSearch, setSearchResults] = useState([]); 
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [activeUser, setActiveUser] = useState([]);
  
   useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users/active");
        const res = response.data;
        setActiveUser(res);
        setPokemons(res);
        console.log(res);
        return res;
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
   
    const cartQuantity = cart.reduce((quantity, item) => item.quantity + quantity, 1)

    const openCart = () => {
      setIsOpen(true)
    }

    const closeCart = () => {
      setIsOpen(false)
    }


  return (
    <>
      <Header cartQuantity={cartQuantity} openCart={openCart} closeCart={closeCart}  />
      <Container>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/CreateUser" element={<CreateNewUser setActiveUser={setActiveUser}/>}/>
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
          {/* <Route
            path="/pokemons/pokemon"
            element={<Pokemon pokemonId={Math.floor(Math.random() * 1000)} />}
          /> */}
          <Route
            path="/cart"
            element={<PokeCart cart={cart} setCart={setCart} cartQuantity={cartQuantity} openCart={openCart} closeCart={closeCart} isOpen={isOpen} />}
          />
        </Routes>
      </Container>
    </>

  );
}

export default App;
