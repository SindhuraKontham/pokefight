const jsonData = require("../pokedex.json")


const getPokemons = (req, res) => {
  try {
    res.json(jsonData);
  } catch (err) {
    res.status(500).send("Something went wrong, Please try again later!!");
  }
};

const getPokemon = (req, res) => {
  try {
    const { id } = req.params;
    res.json(jsonData[id-1]);
  } catch (err) {
    res.status(500).send("Something went wrong, Please try again later!!");
  }
};

const getPokemonInfo = async (req, res) => {
    try {
        const { id ,info } = req.params;
        if(info === "name") {res.json(jsonData[id-1].name )}
        else if (info === "type"){res.json(jsonData[id-1].type)}
        else res.json(jsonData[id-1].base) 
      } catch (err) {
        res.status(500).send("Something went wrong, Please try again later!!");
      }
  };

module.exports = {
    getPokemons,
    getPokemon,
    getPokemonInfo,
};
