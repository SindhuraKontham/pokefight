const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  img: { type: Number },
  username: { type: String, required:[true, "we need a username"] },
  active: { type: Boolean, default: true},
});


 userSchema.pre('save', function(next) {

  
    this.constructor.update({},{$set: {active: false}})
    .then(() => {
      
      next();
    });
 
 
 });

module.exports = mongoose.model("User", userSchema);