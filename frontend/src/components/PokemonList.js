import React, { useState } from "react";
import PokemonType from "./PokemonType";
import { Col, Row, Card } from "react-bootstrap";
import NewComponent from "./NewComponent";
import pokedex from "./pokedex.json";

function PokemonList({ pokemonsInfo, cart, setCart, query, user }) {
  console.log(pokemonsInfo);

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
