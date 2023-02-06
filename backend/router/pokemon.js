const express = require("express");
const {
  getPokemons,
  getPokemon,
  getPokemonInfo,getPokemonNameInfo,
} = require("../controller/pokemon");

const pokemonRouter = express.Router();

pokemonRouter.get("/", getPokemons);

pokemonRouter.get("/:id", getPokemon);

// pokemonRouter.get("/:name", getPokemonName);

pokemonRouter.get("/type/:name", getPokemonNameInfo);

pokemonRouter.get("/:id/:info", getPokemonInfo);

module.exports = {
    pokemonRouter,
};
