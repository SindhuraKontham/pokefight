import Search from "./components/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import ListPage from "./ListPage";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/pokemon")
      .then((res) => {
        const response = res.data 
        setPokemons(response);
        console.log(response);
        return response
      })
      .then((response) => {
        setSearchResults(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <Search pokemons={pokemons} setSearchResults={setSearchResults} />
      </div>
      <div>
        <ListPage searchResults={searchResults} />
      </div>
    </div>
  );
}

export default App;
