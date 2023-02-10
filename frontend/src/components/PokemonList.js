import React from "react";
import Card from "react-bootstrap/Card";
import NewComponent from "./NewComponent";
import Col from "react-bootstrap/Col";
// import axios from "axios";
import pokedex from "./pokedex.json";
// import { useEffect, useState } from "react";


function PokemonList({ pokemonsInfo, cart, setCart, query, user }) {
  return (
    <div>
      <Col sm={12} className="cardmain">
      {pokemonsInfo
            .filter((pokemon) => pokemon.name.toLowerCase().includes(query))
            // .sort((a,b) => a.name > b.name ? -1 : 1)
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
    </div>
  );
}

export default PokemonList;
