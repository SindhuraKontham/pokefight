const express = require("express");

const {
 
  createPokemon,
  getPokemons,
  getPokemon,
  getActivePokemon,
  deletePokemon,
  
} = require("../controller/pokemonCart");

const pokemonCartRouter = express.Router();


pokemonCartRouter.post("/", createPokemon);
pokemonCartRouter.get("/", getPokemons);
pokemonCartRouter.get("/:user", getPokemon);
pokemonCartRouter.get("/active", getActivePokemon);
pokemonCartRouter.delete("/:name", deletePokemon);


module.exports = {
  pokemonCartRouter,
};
