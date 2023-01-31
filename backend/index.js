const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const {pokemonRouter} = require("./router/pokemon")
var cors = require('cors')

// app.use(cors())

const app = express();

app.use(express.json());

app.use("/pokemon", pokemonRouter)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is connected to port ${PORT} and is running!`)
})

