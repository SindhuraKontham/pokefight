import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import axios from "axios";
import Pokemon from "./Pokemon";
import pokedex from "./pokedex.json";

export default function NewComponent({
  pokemon,
  index,
  cart,
  setCart,
  user,
  setClick,
  click,
}) 

{
  const [btnState, setBtnState] = useState(false);

  const handleOnclick = () => {
    setClick(!click);
  };

  const setActive = () => {
    setBtnState(!btnState);
  };

  const quantity = cart.length;

  return (
    <>
      {btnState ? (
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
            <Pokemon url={pokemon.url} />
            {quantity < 5 ? (
              <>
                <button className="button remove"> Remove</button>
                <button className="button more">More</button>
              </>
            ) : (
              <>
                <button className="button full">
                  Full, check your cart to remove or edit{" "}
                </button>
              </>
            )}
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
            <Pokemon url={pokemon.url} />
            {quantity < 5 ? (
              <>
                <button
                  onClick={() => {
                    const stateCopy = cart.slice();
                    stateCopy.push({
                      image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                      name: pokemon.name,
                    });  setCart(stateCopy);
                     setActive();
                    let pokiname =
                        pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1);
                       
                      const pokid = pokedex.findIndex(
                    
                          (element) => 
                            element?.name.english === pokiname
                          
                        )
                        console.log(pokiname)
                        console.log(pokid)
                      axios
                        .post("http://localhost:3001/pokemonCart/", {
                          img: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
                          pokeName: pokemon.name,
                          user: user.username,
                          pok_id: pokid +1
                          ,
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
                <button onClick={handleOnclick} className="button more">
                  More
                </button>
              </>
            ) : (
              <>
                <button className="button full">
                  Full, check your cart to remove or edit{" "}
                </button>
              </>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
}
