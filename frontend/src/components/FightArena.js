import { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import DisplayPokemonFront from "./DisplayPokemonFront";
import DisplayPokemonBack from "./DisplayPokemonBack";
import "./fightarena.css";

function FightArena({pokemons,user}) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  console.log(user)

  const navigate = useNavigate();
  const randomPokemonInfo = pokemons[Math.floor(Math.random() * 15)];

  useEffect(() => {
  axios
  .get(`http://localhost:3001/pokemonCart/${user.username}`)
  .then((response) => {
    setSelectedPokemon(response.data[0].pokeName);
  })
  .catch((error) => {
    console.log(error);
  });
}, [user]);

console.log(selectedPokemon)

  return (
    < div className="Fightarena">      
      <div className="pokemonsToFight">
        <div className="selectedPokemon">
          <DisplayPokemonBack pokemonToDisplay={selectedPokemon} />
        </div>
        <div className="randomPokemon">
          <DisplayPokemonFront pokemonToDisplay={randomPokemonInfo} />
        </div>
        <button className="playbtn" id="wins" >
          Who won??
        </button>
      </div>
      </div>

  )
}

export default FightArena