const mongoose = require("mongoose");

const { Schema } = mongoose;

const pokeCartSchema = new Schema({
  // name, score, active

  image: {
    type: String,
    required: true,
  },

  pokeName: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },
  active: { type: Boolean, default: false},
  
  pok_id: {
    type: Number,
  },
});

module.exports = mongoose.model("PokeCart", pokeCartSchema);
