const mongoose = require("mongoose");

const { Schema } = mongoose;

const fightSchema = new Schema({
  // name, score, active

//   image: {
//     type: String,
//     required: true,
//   }, 

active: { type: Boolean, default: true},

    user: {
    type: String,
  },

  userPokemon1: {
    type: Object,
  },

  userPokemon2: {
    type: Object,
  },

  userPokemon3: {
    type: Object,
  },

  userPokemon4: {
    type: Object,
  },

  userPokemon5: {
    type: Object,
  },

  pcPokemon1: {
    type: Object,
  },

  pcPokemon2: {
    type: Object,
  },

  pcPokemon3: {
    type: Object,
  },

  pcPokemon4: {
    type: Object, 
  },

  pcPokemon5: {
    type: Object,
  },

  winner: {
    type: String,
  },

  userPoints: {
    type: Number,
  },
  
});

module.exports = mongoose.model("Fight", fightSchema);