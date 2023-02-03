import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./pokemonType.css";
import axios from "axios";
import Bug from "./icons/bug.svg";
import Dark from "./icons/dark.svg";
import dragon from "./icons/dragon.svg";
import electric from "./icons/electric.svg";
import fairy from "./icons/fairy.svg";
import fighting from "./icons/fighting.svg";
import fire from "./icons/fire.svg";
import flying from "./icons/flying.svg";
import ghost from "./icons/ghost.svg";
import grass from "./icons/grass.svg";
import ground from "./icons/ground.svg";
import ice from "./icons/ice.svg";
import normal from "./icons/normal.svg";
import poison from "./icons/poison.svg";
import psychic from "./icons/psychic.svg";
import rock from "./icons/rock.svg";
import steel from "./icons/steel.svg";
import water from "./icons/water.svg";
import "./pokemoninfo.css";

function PokemonType({ id, name }) {
  const [pokemonData, setPokemonData] = useState([]);
  const url = `http://localhost:8034/pokemon/${id}/type`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
      <div>
        <Card.Text className="description">
          {/* <div> */}
          <div className="poke0">
            {pokemonData[0] === "Grass" ? (
              <div className="icon grass">
                <img src={grass} alt="grass" />
              </div>
            ) : pokemonData[0] === "Dark" ? (
              <div className="icon dark">
                <img src={Dark} />
              </div>
            ) : pokemonData[0] === "Dragon" ? (
              <div className="icon dragon">
                <img src={dragon} />
              </div>
            ) : pokemonData[0] === "Electric" ? (
              <div className="icon electric">
                <img src={electric} />
              </div>
            ) : pokemonData[0] === "Fairy" ? (
              <div className="icon dark">
                <img src={fairy} />
              </div>
            ) : pokemonData[0] === "Fighting" ? (
              <div className="icon Fighting">
                <img src={fighting} />
              </div>
            ) : pokemonData[0] === "Fire" ? (
              <div className="icon fire">
                <img src={fire} />
              </div>
            ) : pokemonData[0] === "Flying" ? (
              <div className="icon flying">
                <img src={flying} />
              </div>
            ) : pokemonData[0] === "Ghost" ? (
              <div className="icon ghost">
                <img src={ghost} />
              </div>
            ) : pokemonData[0] === "Ground" ? (
              <div className="icon ground">
                <img src={ground} />
              </div>
            ) : pokemonData[0] === "Ice" ? (
              <div className="icon ice">
                <img src={ice} />
              </div>
            ) : pokemonData[0] === "Normal" ? (
              <div className="icon normal">
                <img src={normal} />
              </div>
            ) : pokemonData[0] === "Poison" ? (
              <div className="icon poison">
                <img src={poison} />
              </div>
            ) : pokemonData[0] === "Psychic" ? (
              <div className="icon psychic">
                <img src={psychic} />
              </div>
            ) : pokemonData[0] === "Rock" ? (
              <div className="icon rock">
                <img src={rock} />
              </div>
            ) : pokemonData[0] === "Steel" ? (
              <div className="icon steel">
                <img src={steel} />
              </div>
            ) : pokemonData[0] === "Water" ? (
              <div className="icon water">
                <img src={water} />
              </div>
            ) : pokemonData[0] === "Bug" ? (
              <div className="icon bug">
                <img src={Bug} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="poke1">
            {pokemonData[1] === "Grass" ? (
              <div className="icon grass">
                <img src={grass} />
              </div>
            ) : pokemonData[1] === "Dark" ? (
              <div className="icon dark">
                <img src={Dark} />
              </div>
            ) : pokemonData[1] === "Dragon" ? (
              <div className="icon dragon">
                <img src={dragon} />
              </div>
            ) : pokemonData[1] === "Electric" ? (
              <div className="icon electric">
                <img src={electric} />
              </div>
            ) : pokemonData[1] === "Fairy" ? (
              <div className="icon dark">
                <img src={fairy} />
              </div>
            ) : pokemonData[1] === "Fighting" ? (
              <div className="icon Fighting">
                <img src={fighting} />
              </div>
            ) : pokemonData[1] === "Fire" ? (
              <div className="icon fire">
                <img src={fire} />
              </div>
            ) : pokemonData[1] === "Flying" ? (
              <div className="icon flying">
                <img src={flying} />
              </div>
            ) : pokemonData[1] === "Ghost" ? (
              <div className="icon ghost">
                <img src={ghost} />
              </div>
            ) : pokemonData[1] === "Ground" ? (
              <div className="icon ground">
                <img src={ground} />
              </div>
            ) : pokemonData[1] === "Ice" ? (
              <div className="icon ice">
                <img src={ice} />
              </div>
            ) : pokemonData[1] === "Normal" ? (
              <div className="icon normal">
                <img src={normal} />
              </div>
            ) : pokemonData[1] === "Poison" ? (
              <div className="icon poison">
                <img src={poison} />
              </div>
            ) : pokemonData[1] === "Psychic" ? (
              <div className="icon psychic">
                <img src={psychic} />
              </div>
            ) : pokemonData[1] === "Rock" ? (
              <div className="icon rock">
                <img src={rock} />
              </div>
            ) : pokemonData[1] === "Steel" ? (
              <div className="icon steel">
                <img src={steel} />
              </div>
            ) : pokemonData[1] === "Water" ? (
              <div className="icon water">
                <img src={water} />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* </div> */}
        </Card.Text>
      </div>
    </div>
  );
}

export default PokemonType;
