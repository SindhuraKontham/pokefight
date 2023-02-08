import React from "react";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import Col from "react-bootstrap/Col";
import axios from "axios";
import pokedex from "./pokedex.json";

function PokemonList({ pokemonsInfo, cart, setCart, query, user }) {
  console.log(pokemonsInfo);

  return (
    <div>
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
                      setCart(stateCopy);

                      // const post = {
                      //   img:  `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                      //   name: pokemon.name,
                      // }

                      // console.log(post)
                      let pokiname =
                        pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1);
                      axios
                        .post("http://localhost:3001/pokemonCart/", {
                          img: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                          pokeName: pokemon.name,
                          user: user.username,
                          pok_id: pokedex.findIndex(
                            (element) => element.name.english === pokiname
                          ),
                        })
                        .then(function (response) {
                          console.log(response);
                        })
                        .catch(function (error) {
                          console.log(error);
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
      </Col>
    </div>
  );
}

export default PokemonList;
