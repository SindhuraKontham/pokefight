const mongoose = require("mongoose");

const { Schema } = mongoose;

const pokeCartSchema = new Schema({
  // name, score, active
  image: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },
});

module.exports = mongoose.model("PokeCart", pokeCartSchema);
