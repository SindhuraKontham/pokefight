const express = require("express");

const {
 
  createUser,
  getUsers,
  getActiveUser,
  updateUser,
  
} = require("../controller/users");

const userRouter = express.Router();


userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/active", getActiveUser);
userRouter.put("/:id", updateUser);


module.exports = {
  userRouter,
};
