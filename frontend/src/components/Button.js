import React from "react";
import axios from "axios";
import pokedex from "./pokedex.json";


export default function Button({ poke, btnState, cart, pokemon, setCart, setActive, user, handleOnClick }) {
  // const item = poke.find((i) => console.log(i.name));
  // // const item = poke.find((i) => i.id === id);
  // if (item == null) return null;
  return (
    <>
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
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
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
          <button onClick={handleOnClick} className="button more">
            More
          </button>
        </>
      ) : (
        <>
          <button className="title remove"> Remove</button>
          <button className="button more">More</button>
        </>
      )}{" "}
    </> 
  );
}
