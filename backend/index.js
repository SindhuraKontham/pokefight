require("./db");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const {pokemonRouter} = require("./router/pokemon")
const {pokemonCartRouter} = require("./router/pokemonCart")
const { userRouter } = require("./router/users");

var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

app.use("/pokemon", pokemonRouter)
app.use("/pokemonCart", pokemonCartRouter)
app.use("/users", userRouter);

const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server is connected to port ${PORT} and is running!`)
})

