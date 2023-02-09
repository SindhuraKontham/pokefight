const express = require("express");

const {
 
  createPokemon,
  getPokemon,
  getActivePokemon,
  deletePokemon,
  
} = require("../controller/pokemonCart");

const pokemonCartRouter = express.Router();


pokemonCartRouter.post("/", createPokemon);
pokemonCartRouter.get("/:user", getPokemon);
pokemonCartRouter.get("/active", getActivePokemon);
pokemonCartRouter.put("/:name", deletePokemon);


module.exports = {
  pokemonCartRouter,
};
