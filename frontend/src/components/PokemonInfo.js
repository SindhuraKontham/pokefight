import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./pokemoninfo.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function PokemonInfo({ cart, setCart, pokemons, setSearchResults }) {
  const [pokePic, setPokePic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        // console.log(response.data.results);
        setPokePic(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(pokemons);

    const searchWord = e.target.value;
    const resultsArray = pokemons.filter((pokemon) => {
      return (
        pokemon.name.english.toLowerCase().includes(searchWord.toLowerCase()) ||
        pokemon.type.toLowerCase().includes(e.target.value)
      );
    });

    setSearchResults(resultsArray);
  };

  return (
    <div>
      <form className="input_form" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          placeholder="Search Pokemon"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search_button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <div className="cart">
        <Link to="/cart">
          <ShoppingCartIcon sx={{ fontSize: 60 }}></ShoppingCartIcon>
        </Link>
      </div>
      {loading ? (
        <div>Loading Pokemons.....</div>
      ) : (
        <div className="cardmain">
          {pokePic.map((pokemon, index) => {
            return (
              <Card
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
