import axios from "axios";
import { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./fightarena.css";
import 'animate.css';

function DisplayPokemonBack({ pokemonToDisplay }) {

  const [pokemonImage, setPokemonImage] = useState("");
  const pokemonImageURL = `https://pokeapi.co/api/v2/pokemon/${pokemonToDisplay}`;
  useEffect(() => {
    function fetchPokemonImage() {
      axios
        .get(
          pokemonImageURL
        )
        .then((data) => {
          setPokemonImage(data.data.sprites.back_default);
        })
        .catch((e) => console.log(e));
    }

    pokemonToDisplay && fetchPokemonImage();
  }, [pokemonImageURL]);

  return (
    <>
      <div className="singlePokemonBack">
        {/* <h2> {pokemonToDisplay?.name.english}</h2> */}
        <ProgressBar className="progress" animated now={45} />
        <img
          className="pokemonimg rotatedback animate__animated animate__bounce"
          src={`${pokemonImage}`}
          alt={pokemonToDisplay}
        />
      </div>
    </>
  );
}

export default DisplayPokemonBack;
