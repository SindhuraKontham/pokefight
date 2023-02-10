const Fight = require("../model/fight");

const createFight = async (req, res) => {
    const { active, user, img, winner,score} = req.body;
    // console.log(req.body)
    try {
      const fight = await Fight.create({ active:active, user:user, img:img ,winner:winner,score:score});
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