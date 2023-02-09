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
            .map((pokemon, index) => {
              return (
                <NewComponent
                  pokemon={pokemon}
                  index={index}
                  cart={cart}
                  setCart={setCart}
                  user={user}
                />
              );
            })}
      </Col>
    </div>
  );
}

export default PokemonList;
