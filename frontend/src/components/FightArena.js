import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPokemon from "../components/DisplayPokemon";

function FightArena({
  pokemons,
  selectedPokemon,
  randomPokemon,
  setRandomPokemon,
}) {

    console.log(pokemons)
  const navigate = useNavigate();
  const randomPokemonID = Math.floor(Math.random() * pokemons.length);

  const pokemonToDisplay = {
    name: pokemons[randomPokemonID].name.english,
    info: pokemons[randomPokemonID],
  };

  useEffect(() => {
    setRandomPokemon(pokemonToDisplay);
  }, []);

  const checkfight = () => {
    navigate("/results");
  };

  return (
    <div className="Fightarena-container">
      <h3>Let the fight begin</h3>
      <div className="pokemonsToFight">
        <div className="selectedPokemon">
          <DisplayPokemon pokemonToDisplay={selectedPokemon.name} />
        </div>
        <div className="vs">
          <h2>VS</h2>
        </div>
        <div className="randomPokemon">
          <DisplayPokemon pokemonToDisplay={randomPokemon} />
        </div>
        <button className="playbtn" id="wins" onClick={checkfight}>
          Who wins?
        </button>
      </div>
    </div>
  );
}

export default FightArena;
