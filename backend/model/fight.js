const mongoose = require("mongoose");

const { Schema } = mongoose;

const fightSchema = new Schema({

active: { type: Boolean, default: true},

    user: {
    type: String,
  },

  img: {
    type: Number,
  },

  winner: {
    type: Boolean,
  },

  score: {
    type: Number,
  },
  
});

fightSchema.pre('save', function(next) {

  this.constructor.update({},{$set: {active: false}})
  .then(() => {
    
    next();
  });

});

module.exports = mongoose.model("Fight", fightSchema);