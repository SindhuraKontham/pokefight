import React, { useState, useEffect, useRef } from "react";
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
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function PokemonType({ id, name }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [pokemonData, setPokemonData] = useState([]);
  const url = `http://localhost:3001/pokemon/type/${name}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div>
      <div>
        <Card.Text className="description">
          {/* <div> */}
          <div className="poke0">
            {pokemonData[0] === "Grass" ? (
              <div className="icon grass">
                <img
                  src={grass}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Dark" ? (
              <div className="icon dark">
                <img
                  src={Dark}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Dragon" ? (
              <div className="icon dragon">
                <img
                  src={dragon}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Electric" ? (
              <div className="icon electric">
                <img
                  src={electric}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Fairy" ? (
              <div className="icon dark">
                <img
                  src={fairy}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Fighting" ? (
              <div className="icon Fighting">
                <img
                  src={fighting}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Fire" ? (
              <div className="icon fire">
                <img
                  src={fire}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Flying" ? (
              <div className="icon flying">
                <img
                  src={flying}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Ghost" ? (
              <div className="icon ghost">
                <img
                  src={ghost}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Ground" ? (
              <div className="icon ground">
                <img
                  src={ground}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Ice" ? (
              <div className="icon ice">
                <img
                  src={ice}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Normal" ? (
              <div className="icon normal">
                <img
                  src={normal}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Poison" ? (
              <div className="icon poison">
                <img
                  src={poison}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Psychic" ? (
              <div className="icon psychic">
                <img
                  src={psychic}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Rock" ? (
              <div className="icon rock">
                <img
                  src={rock}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Steel" ? (
              <div className="icon steel">
                <img
                  src={steel}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Water" ? (
              <div className="icon water">
                <img
                  src={water}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[0] === "Bug" ? (
              <div className="icon bug">
                <img
                  src={Bug}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[0]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="poke1">
            {pokemonData[1] === "Grass" ? (
              <div className="icon grass">
                <img
                  src={grass}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}></Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Dark" ? (
              <div className="icon dark">
                <img
                  src={Dark}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Dragon" ? (
              <div className="icon dragon">
                <img
                  src={dragon}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Electric" ? (
              <div className="icon electric">
                <img
                  src={electric}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Fairy" ? (
              <div className="icon dark">
                <img
                  src={fairy}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Fighting" ? (
              <div className="icon Fighting">
                <img
                  src={fighting}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Fire" ? (
              <div className="icon fire">
                <img
                  src={fire}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Flying" ? (
              <div className="icon flying">
                <img
                  src={flying}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Ghost" ? (
              <div className="icon ghost">
                <img
                  src={ghost}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Ground" ? (
              <div className="icon ground">
                <img
                  src={ground}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Ice" ? (
              <div className="icon ice">
                <img
                  src={ice}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Normal" ? (
              <div className="icon normal">
                <img
                  src={normal}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Poison" ? (
              <div className="icon poison">
                <img
                  src={poison}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Psychic" ? (
              <div className="icon psychic">
                <img
                  src={psychic}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Rock" ? (
              <div className="icon rock">
                <img
                  src={rock}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Steel" ? (
              <div className="icon steel">
                <img
                  src={steel}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
              </div>
            ) : pokemonData[1] === "Water" ? (
              <div className="icon water">
                <img
                  src={water}
                  alt="grass "
                  ref={target}
                  onClick={() => setShow(!show)}
                />{" "}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {pokemonData[1]}
                    </Tooltip>
                  )}
                </Overlay>
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
