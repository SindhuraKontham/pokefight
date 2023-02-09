import axios from "axios";
import { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./fightarena.css";
import 'animate.css';

function DisplayPokemonFront({ pokemonToDisplay }) {
  const [pokemonImage, setPokemonImage] = useState("");
  const pokemonImageURL = `https://pokeapi.co/api/v2/pokemon/${pokemonToDisplay?.name.english.toLowerCase()}`;
console.log(pokemonImageURL)
  useEffect(() => {
    function fetchPokemonImage() {
      axios
        .get(
          pokemonImageURL
        )
        .then((data) => {
          setPokemonImage(data.data.sprites.front_default);
        })
        .catch((e) => console.log(e));
    }

    pokemonToDisplay && fetchPokemonImage();
  }, [pokemonImageURL]);

  return (
    <>
      <div className="singlePokemonFront">
        {/* <h2> {pokemonToDisplay?.name.english}</h2> */}
        <ProgressBar className="progress" animated now={45} />
        <img
          className="pokemonimg rotated animate__animated animate__bounce"
          src={`${pokemonImage}`}
          alt={pokemonToDisplay?.name}
        />
      </div>
    </>
  );
}

export default DisplayPokemonFront;
