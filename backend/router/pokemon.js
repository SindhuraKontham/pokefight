const express = require("express");
const {
  getPokemons,
  getPokemon,getPokemonName,
  getPokemonInfo,getPokemonNameInfo,
} = require("../controller/pokemon");

const pokemonRouter = express.Router();

pokemonRouter.get("/", getPokemons);

pokemonRouter.get("/:id", getPokemon);

pokemonRouter.get("/:name", getPokemonName);

pokemonRouter.get("/:id/:info", getPokemonInfo);

pokemonRouter.get("/:name/:info", getPokemonNameInfo);

module.exports = {
    pokemonRouter,
};
