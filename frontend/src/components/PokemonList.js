import React, { useState } from "react";
import PokemonType from "./PokemonType";
import { Col, Row, Card } from "react-bootstrap";
import NewComponent from "./NewComponent";
import pokedex from "./pokedex.json";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";


function PokemonList({ pokemonsInfo, cart, setCart, query, user }) {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then((response) => {
        let pokemonWithStats = [];
        response.data.results.forEach((pokemon) => {
          axios
            .get(pokemon.url)
            .then((res) => {
              pokemonWithStats.push({
                name: pokemon.name,
                stats: res.data.stats,
              });
              if (pokemonWithStats.length === response.data.results.length) {
                setPokemon(pokemonWithStats);
                setLoading(false);
              }
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const [active, setActive] = useState(null);

  return (
    <div>
      <Row>
        <Col sm={8} className="cardmain">
          {pokemonsInfo
            .filter((pokemon) => pokemon.name.toLowerCase().includes(query))
            .map((pokemon, index) => {
              return (
                <NewComponent
                  pokemon={pokemon}
                  index={index}
                  cart={cart}
                  setCart={setCart}
                  user={user}
                  poedex={pokedex}
                />
              );
            })}
        </Col>
        <Col>Lukas's component? Card with more details?</Col>
      </Row>
    </div>
  );
}

export default PokemonList;