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

// const getPokemonName = (req, res) => {
//   try {
//     const { name } = req.params;
//     res.json(jsonData[name]);
//   } catch (err) {
//     res.status(500).send("Something went wrong, Please try again later!!");
//   }
// };


const getPokemonInfo = async (req, res) => {
    try {
        const { id ,info } = req.params;
        if(info === "name") {res.json(jsonData[id].name )}
        else if (info === "type"){res.json(jsonData[id].type)}
        else res.json(jsonData[id].base) 
      } catch (err) {
        res.status(500).send("Something went wrong, Please try again later!!");
      }
  };

  const getPokemonNameInfo = async (req, res) => {
    try {
        const { name } = req.params;
        const findOne = jsonData.filter( data => data.name.english.toLowerCase() === name.toLowerCase())
          res.json(findOne[0].type)}
      
       catch (err) {
        res.status(500).send("Something!!");
      }
  };

module.exports = {
    getPokemons,
    getPokemon,
    // getPokemonName,
    getPokemonInfo,
    getPokemonNameInfo,
};
