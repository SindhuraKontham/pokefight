import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./pokemoninfo.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import Search from "./Search";

function PokemonInfo({ cart, setCart }) {
  const [pokeInfo, setPokeInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const pokRef = useRef();

  console.log(query);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        // console.log(response.data.results);
        setPokeInfo(response.data.results);
        // setQuery(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.newItem.value;
    if (!item) {
      return setPokeInfo();
    }
    if (item) setPokeInfo([...pokeInfo, item]);
    e.target.reset();
  };

  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  return (
    <div>
      <Search
        data={search(pokeInfo)}
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
        pokeInfo={pokeInfo}
      />
      <div className="cart">
        <Link to="/cart">
          <ShoppingCartIcon sx={{ fontSize: 60 }}></ShoppingCartIcon>
        </Link>
      </div>
      {loading ? (
        <div>Loading Pokemons.....</div>
      ) : (
        <div className="cardmain">
          {pokeInfo
            .filter((pokemon) => pokemon.name.toLowerCase().includes(query))
            .map((pokemon, index) => {
              return (
                <Card
                  key={pokemon.name}
                  className="card"
                  border="primary"
                  style={{ width: "13rem", height: "17rem" }}
                >
                  <PokemonType id={index} name={pokemon.name} />
                  <Card.Img
                    variant="top"
                    src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                    className="cardImage"
                  />
                  <Card.Body>
                    <Card.Title className="title">
                      <br /> {pokemon.name}
                    </Card.Title>
                    <br />
                    <button
                      ref={pokRef}
                      onClick={() => {
                        setCart({
                          ...cart,
                          image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                          name: pokemon.name,
                        });
                      }}
                      className="title button"
                    >
                      {" "}
                      Add
                    </button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
