import React from "react";
import Card from "react-bootstrap/Card";
import NewComponent from "./NewComponent";
import Col from "react-bootstrap/Col";

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

                />
              );
            })}
      </Col>
    </div>
  );
}

export default PokemonList;
