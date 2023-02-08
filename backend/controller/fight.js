const Fight = require("../model/fight");

const createFight = async (req, res) => {
    const { active, user, userPokemon1, userPokemon2, userPokemon3,userPokemon4,userPokemon5,pcPokemon1,pcPokemon2,pcPokemon3,pcPokemon4,pcPokemon5,winner,userPoints} = req.body;
    // console.log(req.body)
    try {
      const fight = await Fight.create({ active:active, user:user, userPokemon1:userPokemon1, userPokemon2:userPokemon2, userPokemon3:userPokemon3,userPokemon4:userPokemon4,userPokemon5:userPokemon5,pcPokemon1:pcPokemon1,pcPokemon2:pcPokemon2,pcPokemon3:pcPokemon3,pcPokemon4:pcPokemon4,pcPokemon5:pcPokemon5,winner:winner,userPoints:userPoints});
      res.status(201).json(fight);
    } catch (error) {
      console.log(error.message)
      res.status(500).send(error.messages);
    }
  };

  const getFight = async (req, res) => {
    try {
      const fight = await Fight.find({});
      res.json(fight);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const getActiveFight = async (req, res) => {
    try {
      const fight = await Fight.findOne({active:true});
      res.json(fight);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const deleteFight = async (req, res) => {
    const { id } = req.params;
    try {
      const fight = await Fight.findOneAndDelete({ id } )
      fight.save()
      res.json(fight);
      
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  module.exports = {

    createFight,
    getFight,
    getActiveFight,
    deleteFight,
    
  };