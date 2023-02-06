import React from 'react'
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import Col from 'react-bootstrap/Col';

function PokemonList({pokemonsInfo,cart,setCart, query}) {
    console.log(pokemonsInfo)
  return (<div>
         <Col sm={8} className="cardmain">
        {pokemonsInfo
        .filter((pokemon) => pokemon.name.toLowerCase().includes(query))
        .map((pokemon, index) => {
          return (
            <Card
              className="cardpoke"
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
                <button
                  onClick={() => {
                    const stateCopy = cart.slice();
                    stateCopy.push({
                      image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                      name: pokemon.name,
                    });
                    console.log(stateCopy);
                    setCart(stateCopy);
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
      </Col>
    </div>
  )
}

export default PokemonList