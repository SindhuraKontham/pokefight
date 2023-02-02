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

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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
      <Header />
      <Routes>
        {/* to be changed to path:"/" */}
        <Route path="/user" element={<User />} />
        <Route path="/CreateUser" element={<CreateNewUser />} />
      </Routes>
      {/* to be children of sindhuras component in new Route:"/" */}
      <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}

export default App;
