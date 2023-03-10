import React, { useState, useEffect } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import PokemonType from "./PokemonType";
import axios from "axios";
import Pokemon from "./Pokemon";
import "./pokemoninfo.css";
// import Button from "./Button";
import pokedex from "./pokedex.json";

export default function NewComponent({
  pokemon,
  index,
  cart,
  setCart,
  user,
  setClick,
  click,
}) {
  
  const [btnState, setBtnState] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setClick(!click);
  };

  const setActive = () => {
    setBtnState(!btnState);
  };

  const quantity = cart.length;

  return (
    <>
      {quantity > 4 ? (
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
            <button className="button full">
              Full, check your cart to remove or edit{" "}
            </button>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className="cardpoke"
          border="primary"
          style={{ width: "16rem", padding: ".5rem" }}
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

            {!btnState ? (
              <>
                <button
                  onClick={() => {
                    const stateCopy = cart.slice();
                    stateCopy.push({
                      image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                      name: pokemon.name,
                    });
                    setCart(stateCopy);
                    setActive();
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
                <Button
                  onClick={() => setOpen(!open)}
                  className="button more"
                  aria-controls="poke-info"
                  aria-expanded={open}
                >
                  More
                </Button>
                <Collapse in={open}>
                  <div id="poke-info">
                    <Pokemon url={pokemon.url} />
                  </div>
                </Collapse>
              </>
            ) : (
              <>
                <button className="button remove"> Remove</button>
                <Button
                  onClick={() => setOpen(!open)}
                  className="button more"
                  aria-controls="poke-info"
                  aria-expanded={open}
                >
                  More
                </Button>
                <Collapse in={open}>
                  <div id="poke-info">
                    <Pokemon url={pokemon.url} />
                  </div>
                </Collapse>  
              </>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
}
