const Pokemon = require("../model/PokeCart");

const createPokemon = async (req, res) => {
    const { img, pokeName, user  } = req.body;
    //console.log(req.body)
    try {
      const pokemon = await Pokemon.create({  image:img, pokeName:pokeName, user:user });
      res.status(201).json(pokemon);
    } catch (error) {
      console.log(error.message)
      res.status(500).send(error.messages);
    }
  };

  const getPokemon = async (req, res) => {
    try {
      const { user  } = req.params;
      console.log(user)
      const pokemon = await Pokemon.find({ user : user , active : true});
      res.json(pokemon);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const getActivePokemon = async (req, res) => {
    try {
      const pokemon = await Pokemon.findOne({active:true});
      res.json(pokemon);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const deletePokemon = async (req, res) => {
    const { name } = req.params;
    try {
      const pokemon = await Pokemon.findOneAndDelete({ name } )
      pokemon.save()
      res.json(pokemon);
      
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  module.exports = {

    createPokemon,
    getPokemon,
    getActivePokemon,
    deletePokemon,
    
  };