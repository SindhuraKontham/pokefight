const User = require("../models/users");

const createUser = async (req, res) => {
    const { img, username } = req.body;
    try {
      const user = await User.create({  img, username});
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const getUsers = async (req, res) => {
    try {
      const user = await User.find({});
      res.json(user);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const getActiveUser = async (req, res) => {
    try {
      const user = await User.findOne({active:true});
      res.json(user);
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({ _id:id});
      user.active=!user.active
      user.save()
      res.json(user);
      
    } catch (error) {
      res.status(500).send(error.messages);
    }
  };

  module.exports = {

    createUser,
    getUsers,
    getActiveUser,
    updateUser,
    
  };