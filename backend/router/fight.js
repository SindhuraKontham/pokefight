const express = require("express");

const {
 
  createFight,
  getFight,
  getActiveFight,
  deleteFight,
  
} = require("../controller/fight");

const fightRouter = express.Router();


fightRouter.post("/", createFight);
fightRouter.get("/", getFight);
fightRouter.get("/active", getActiveFight);
fightRouter.delete("/:id", deleteFight);


module.exports = {
  fightRouter,
};