import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import Col from "react-bootstrap/Col";
import axios from "axios";
import pokedex from "./pokedex.json";
import NewComponent from "./NewComponent";

function PokemonList({ pokemonsInfo, cart, setCart, query, user }) {
  console.log(pokemonsInfo);

  const [active, setActive] = useState(null);
  

 const quantity = cart.length;


  return (
    <div>
      <Col sm={8} className="cardmain">
        {pokemonsInfo
          .filter((pokemon) => pokemon.name.toLowerCase().includes(query))
          .map((pokemon, index) => {

            return <NewComponent pokemon={pokemon} index={index} cart={cart} setCart={setCart} user={user} poedex={pokedex} />})}

      </Col>
    </div>
  );
}

export default PokemonList;
