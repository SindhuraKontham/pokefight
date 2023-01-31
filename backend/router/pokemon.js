const express = require("express");
const {
  getPokemons,
  getPokemon,
  getPokemonInfo,
} = require("../controller/pokemon");

const pokemonRouter = express.Router();

pokemonRouter.get("/", getPokemons);

pokemonRouter.get("/:id", getPokemon);

pokemonRouter.get("/:id/:info", getPokemonInfo);

module.exports = {
    pokemonRouter,
};
