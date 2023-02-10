import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import pokedex from "./pokedex.json";
import "./fightarena.css";
import "./displayPokemons.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Ball from "./icons/pokemonball.png";
import { Navigate } from "react-router-dom";

export default function Fight({ activeUser }) {
  console.log(activeUser);
  const [playerPokemonsId, setPlayerPokemonsId] = useState([]);
  const [playerPokemon1, setPlayerPokemon1] = useState(0);
  const [playerPokemon2, setPlayerPokemon2] = useState(1);
  const [playerPokemon3, setPlayerPokemon3] = useState(2);
  const [playerPokemon4, setPlayerPokemon4] = useState(3);
  const [playerPokemon5, setPlayerPokemon5] = useState(4);

  const [imagePokemon1, setImagePokemon1] = useState("");
  const [imagePokemon2, setImagePokemon2] = useState("");
  const [imagePokemon3, setImagePokemon3] = useState("");
  const [imagePokemon4, setImagePokemon4] = useState("");
  const [imagePokemon5, setImagePokemon5] = useState("");
  const [pcPokemonId, setPcPokemonId] = useState([0, 1, 2, 3, 4]);

  const [imagePCPokemon1, setImagePCPokemon1] = useState("");
  const [imagePCPokemon2, setImagePCPokemon2] = useState("");
  const [imagePCPokemon3, setImagePCPokemon3] = useState("");
  const [imagePCPokemon4, setImagePCPokemon4] = useState("");
  const [imagePCPokemon5, setImagePCPokemon5] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [pokeballActive, setPokeballActive] = useState(false);

  useEffect(() => {
    const pcPokemonId = [];
    while (pcPokemonId.length < 5) {
      let r = Math.floor(Math.random() * 100) + 1;
      if (pcPokemonId.indexOf(r) === -1) pcPokemonId.push(r);
    }
    setPcPokemonId(pcPokemonId);
    setImagePCPokemon1(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pcPokemonId[0] + 1
      }.png`
    );
    setImagePCPokemon2(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pcPokemonId[1] + 1
      }.png`
    );
    setImagePCPokemon3(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pcPokemonId[2] + 1
      }.png`
    );
    setImagePCPokemon4(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pcPokemonId[3] + 1
      }.png`
    );
    setImagePCPokemon5(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pcPokemonId[4] + 1
      }.png`
    );
  }, []);

  //   Pc Pokemons Indexes:

  const pcPokemon1 = pcPokemonId[0];
  const pcPokemon2 = pcPokemonId[1];
  const pcPokemon3 = pcPokemonId[2];
  const pcPokemon4 = pcPokemonId[3];
  const pcPokemon5 = pcPokemonId[4];

  const computerPlayers = [
    imagePCPokemon1,
    imagePCPokemon2,
    imagePCPokemon3,
    imagePCPokemon4,
    imagePCPokemon5,
  ];

  //   Get Request to the pokemon cart:

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pokemonCart/");
        const res = response.data;

        //   Filter the array of pokemons from the active user:
        let userPokemons = res.filter(
          (item) => item.user === activeUser.username
        );
        //   Extract array of indexes
        setPlayerPokemonsId(userPokemons.map((a) => a.pok_id));

        //   Extract index of each Pokemon
        setPlayerPokemon1(userPokemons[0].pok_id);
        setPlayerPokemon2(userPokemons[1].pok_id);
        setPlayerPokemon3(userPokemons[2].pok_id);
        setPlayerPokemon4(userPokemons[3].pok_id);
        setPlayerPokemon5(userPokemons[4].pok_id);

        setImagePokemon1(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            userPokemons[0].pok_id + 1
          }.png`
        );
        setImagePokemon2(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            userPokemons[1].pok_id + 1
          }.png`
        );
        setImagePokemon3(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            userPokemons[2].pok_id + 1
          }.png`
        );
        setImagePokemon4(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            userPokemons[3].pok_id + 1
          }.png`
        );
        setImagePokemon5(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            userPokemons[4].pok_id + 1
          }.png`
        );
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [activeUser.username]);
  //   Get 5 random pokemons for PC:
  let pcPokemons = pcPokemonId;

  //   more difficulty (0-1) means more special attacks for the PC and less to Player:
  let difficulty = 0.5;

  //   Delay for the pc attack in milliseconds:
  const delay = 2000;

  //   Start of Logic

  //   States

  const [pcHP, setPcHP] = useState(pokedex[pcPokemon1].base.HP);

  const [playerHP, setPlayerHP] = useState(pokedex[playerPokemon1].base.HP);

  const [pcActivePokemon, setPcActivePokemon] = useState(pcPokemon1);

  const [playerActivePokemon, setPlayerActivePokemon] =
    useState(playerPokemon1);

  const [playerHP1, setPlayerHP1] = useState();
  const [playerHP2, setPlayerHP2] = useState();
  const [playerHP3, setPlayerHP3] = useState();
  const [playerHP4, setPlayerHP4] = useState();
  const [playerHP5, setPlayerHP5] = useState();

  const [pcHP1, setPcHP1] = useState();
  const [pcHP2, setPcHP2] = useState();
  const [pcHP3, setPcHP3] = useState();
  const [pcHP4, setPcHP4] = useState();
  const [pcHP5, setPcHP5] = useState();

  useEffect(() => {
    setPcHP1(pokedex[pcPokemon1].base.HP);
    setPcHP2(pokedex[pcPokemon2].base.HP);
    setPcHP3(pokedex[pcPokemon3].base.HP);
    setPcHP4(pokedex[pcPokemon4].base.HP);
    setPcHP5(pokedex[pcPokemon5].base.HP);
    setPlayerHP1(pokedex[playerPokemon1].base.HP);
    setPlayerHP2(pokedex[playerPokemon2].base.HP);
    setPlayerHP3(pokedex[playerPokemon3].base.HP);
    setPlayerHP4(pokedex[playerPokemon4].base.HP);
    setPlayerHP5(pokedex[playerPokemon5].base.HP);
  }, [
    pokedex[pcPokemon1].base.HP,
    pokedex[pcPokemon2].base.HP,
    pokedex[pcPokemon3].base.HP,
    pokedex[pcPokemon4].base.HP,
    pokedex[pcPokemon5].base.HP,
    pokedex[playerPokemon1].base.HP,
    pokedex[playerPokemon2].base.HP,
    pokedex[playerPokemon3].base.HP,
    pokedex[playerPokemon4].base.HP,
    pokedex[playerPokemon5].base.HP,
  ]);

  const [playerSpAttack, setPlayerSpAttack] = useState(
    Math.random() > difficulty ? true : false
  );
  const [pcSpAttack, setPcSpAttack] = useState(
    Math.random() > difficulty ? false : true
  );
  const [playerUsingSpA, setPlayerUsingSpA] = useState(false);

  //   On pc Pokemon change action changes randomly after each attack

  const SavePcHPandChange = () => {
    if (pcActivePokemon === pcPokemon1) {
      if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else {
        setPcActivePokemon(pcPokemonId[0]);
      }
    } else if (pcActivePokemon === pcPokemon2) {
      if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else {
        setPcActivePokemon(pcPokemonId[2]);
      }
    } else if (pcActivePokemon === pcPokemon3) {
      if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else {
        setPcActivePokemon(pcPokemonId[0]);
      }
    } else if (pcActivePokemon === pcPokemon4) {
      if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else {
        setPcActivePokemon(pcPokemonId[0]);
      }
    } else {
      if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else {
        setPcActivePokemon(pcPokemonId[4]);
      }
    }
  };

  //   Onclick action

  const SelectPokemon1 = () => {
    setPlayerActivePokemon(playerPokemon1);
    setPokeballActive(false);
  };

  const SelectPokemon2 = () => {
    setPlayerActivePokemon(playerPokemon2);
    setPokeballActive(false);
  };

  const SelectPokemon3 = () => {
    setPlayerActivePokemon(playerPokemon3);
    setPokeballActive(false);
  };

  const SelectPokemon4 = () => {
    setPlayerActivePokemon(playerPokemon4);
    setPokeballActive(false);
  };

  const SelectPokemon5 = () => {
    setPlayerActivePokemon(playerPokemon5);
    setPokeballActive(false);
  };

  const ChangePokemon = () => {
    setPokeballActive(true);
  };

  const PlayerIsAttacked = () => {
    const playerHPTaken = pcSpAttack
      ? (pokedex[playerActivePokemon].base["Sp. Defense"] *
          pokedex[pcActivePokemon].base["Sp. Attack"]) /
        230
      : (pokedex[playerActivePokemon].base.Defense *
          pokedex[pcActivePokemon].base.Attack) /
        230;

    if (playerActivePokemon === playerPokemon1) {
      if (Math.round(playerHP1 - playerHPTaken) > 0) {
        setPlayerHP1(Math.round(playerHP1 - playerHPTaken));
      } else {
        setPlayerHP1(0);
      }
    } else if (playerActivePokemon === playerPokemon2) {
      if (Math.round(playerHP2 - playerHPTaken) > 0) {
        setPlayerHP2(Math.round(playerHP2 - playerHPTaken));
      } else {
        setPlayerHP2(0);
      }
    } else if (playerActivePokemon === playerPokemon3) {
      if (Math.round(playerHP3 - playerHPTaken) > 0) {
        setPlayerHP3(Math.round(playerHP3 - playerHPTaken));
      } else {
        setPlayerHP3(0);
      }
    } else if (playerActivePokemon === playerPokemon4) {
      if (Math.round(playerHP4 - playerHPTaken) > 0) {
        setPlayerHP4(Math.round(playerHP4 - playerHPTaken));
      } else {
        setPlayerHP4(0);
      }
    } else {
      if (Math.round(playerHP5 - playerHPTaken) > 0) {
        setPlayerHP5(Math.round(playerHP5 - playerHPTaken));
      } else {
        setPlayerHP5(0);
      }
    }
  };

  const PcIsAttacked = () => {
    const pcHPTaken = playerUsingSpA
      ? (pokedex[pcActivePokemon].base["Sp. Defense"] *
          pokedex[playerActivePokemon].base["Sp. Attack"]) /
        230
      : (pokedex[pcActivePokemon].base.Defense *
          pokedex[playerActivePokemon].base.Attack) /
        230;

    if (pcActivePokemon === pcPokemon1) {
      pcHP1 - pcHPTaken > 0
        ? setPcHP1(Math.round(pcHP1 - pcHPTaken))
        : setPcHP1(0);
    } else if (pcActivePokemon === pcPokemon2) {
      pcHP1 - pcHPTaken > 0
        ? setPcHP2(Math.round(pcHP2 - pcHPTaken))
        : setPcHP2(0);
    } else if (pcActivePokemon === pcPokemon3) {
      pcHP1 - pcHPTaken > 0
        ? setPcHP3(Math.round(pcHP3 - pcHPTaken))
        : setPcHP3(0);
    } else if (pcActivePokemon === pcPokemon4) {
      pcHP1 - pcHPTaken > 0
        ? setPcHP4(Math.round(pcHP4 - pcHPTaken))
        : setPcHP4(0);
    } else {
      pcHP1 - pcHPTaken > 0
        ? setPcHP5(Math.round(pcHP5 - pcHPTaken))
        : setPcHP5(0);
    }
  };

  //   Attack function

  const PlayerAttack = () => {
    if (
      pokedex[playerActivePokemon].base.Speed >
      pokedex[pcActivePokemon].base.Speed
    ) {
      PcIsAttacked();

      setTimeout(() => {
        PlayerIsAttacked();
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
      }, delay);
    } else {
      PlayerIsAttacked();

      setTimeout(() => {
        PcIsAttacked();
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
      }, delay);
    }
  };

  //  Special Attack function

  const PlayerSpAttack = () => {
    setPlayerUsingSpA(true);
    if (
      pokedex[playerActivePokemon].base.Speed >
      pokedex[pcActivePokemon].base.Speed
    ) {
      PcIsAttacked();

      setTimeout(() => {
        PlayerIsAttacked();
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
      }, delay);
    } else {
      PlayerIsAttacked();
      setTimeout(() => {
        PcIsAttacked();
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
      }, delay);
    }
  };

  //   End of Logic

  //   Post of the score in fight db
  const resultWinner =
    playerHP1 === 0 &&
    playerHP2 === 0 &&
    playerHP3 === 0 &&
    playerHP4 === 0 &&
    playerHP5 === 0
      ? false
      : true;

  const resultScore =
    pokedex[pcPokemonId[0]].base.HP +
    pokedex[pcPokemonId[1]].base.HP +
    pokedex[pcPokemonId[2]].base.HP +
    pokedex[pcPokemonId[3]].base.HP +
    pokedex[pcPokemonId[4]].base.HP +
    pcHP1 -
    pcHP2 -
    pcHP3 -
    pcHP4 -
    pcHP5;

  const postData = {
    user: activeUser.username,
    img: activeUser.img,
    winner: resultWinner,
    score: resultScore,
  };

  function postResult() {
    axios.post("http://localhost:3001/fight", postData).then((res) => {
      setGameOver(() => {
        return [res.data];
      });
    });
  }
  useEffect(() => {
    if (
      playerHP1 === 0 &&
      playerHP2 === 0 &&
      playerHP3 === 0 &&
      playerHP4 === 0 &&
      playerHP5 === 0
    ) {
      setGameOver(true);
      postResult();
    } else if (
      pcHP1 === 0 &&
      pcHP2 === 0 &&
      pcHP3 === 0 &&
      pcHP4 === 0 &&
      pcHP5 === 0
    ) {
      setGameOver(true);
      postResult();
    }
  }, [
    playerHP1,
    playerHP2,
    playerHP3,
    playerHP4,
    playerHP5,
    pcHP1,
    pcHP2,
    pcHP3,
    pcHP4,
    pcHP5,
  ]);

  console.log(playerPokemon1);
  return (
    <div className="Fightarena">
      <div>
        {/* <DisplayPokemons props = {props} classname="userPlayer"/> */}
        <div className="span">
          <div>
            <div>
              <img
                className={`display userPlayer ${playerHP1 === 0? "imgopacity" : ""}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  playerPokemon1 + 1
                }.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon1}
                disabled={
                  playerHP1 === 0 ? true : pokeballActive ? false : true
                }
              >
                Pokemon 1 || {playerHP1}
              </button>
            </div>
          </div>
          <button
            className="pokball"
            onClick={ChangePokemon}
            style={{
              background: "white",
            }}
          >
            <img
              src={Ball}
              // src={Pokeball}
              alt="Pokeball"
              style={{
                width: "6rem",
                height: "6rem",
              }}
            />{" "}
          </button>
          <div>
            <button
              className="plybtn"
              onClick={PlayerAttack}
              style={{ width: "12rem", height: "4rem" }}
              disabled={
                playerActivePokemon === playerPokemon1 && playerHP1 === 0
                  ? true
                  : playerActivePokemon === playerPokemon2 && playerHP2 === 0
                  ? true
                  : playerActivePokemon === playerPokemon3 && playerHP3 === 0
                  ? true
                  : playerActivePokemon === playerPokemon4 && playerHP4 === 0
                  ? true
                  : false
              }
            >
              PLAYER: attack
            </button>
            {playerSpAttack && (
              <button
                className="plybtn"
                onClick={PlayerSpAttack}
                style={{ width: "12rem", height: "4rem" }}
                disabled={
                  playerActivePokemon === playerPokemon1 && playerHP1 === 0
                    ? true
                    : playerActivePokemon === playerPokemon2 && playerHP2 === 0
                    ? true
                    : playerActivePokemon === playerPokemon3 && playerHP3 === 0
                    ? true
                    : playerActivePokemon === playerPokemon4 && playerHP4 === 0
                    ? true
                    : false
                }
              >
                PLAYER: special attack
              </button>
            )}
          </div>
          <img
            className={`display userPlayer ${pcHP1 === 0? "imgopacity" : ""}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pcPokemonId[0] + 1
            }.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className={`display userPlayer ${playerHP2=== 0? "imgopacity" : ""}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  playerPokemon2 + 1
                }.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon2}
                disabled={
                  playerHP2 === 0 ? true : pokeballActive ? false : true
                }
              >
                Pokemon 2|| {playerHP2}
              </button>
            </div>
          </div>
          <img
            className={`display userPlayer ${pcHP2 === 0? "imgopacity" : ""}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pcPokemonId[1] + 1
            }.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className={`display userPlayer ${playerHP3 === 0? "imgopacity" : ""}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  playerPokemon3 + 1
                }.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon3}
                disabled={
                  playerHP3 === 0 ? true : pokeballActive ? false : true
                }
              >
                Pokemon 3 || {playerHP3}
              </button>
            </div>
          </div>
          <img
            className={`display userPlayer ${pcHP3 === 0? "imgopacity" : ""}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pcPokemonId[2] + 1
            }.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className={`display userPlayer ${playerHP4 === 0? "imgopacity" : ""}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  playerPokemon4 + 1
                }.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon4}
                disabled={
                  playerHP4 === 0 ? true : pokeballActive ? false : true
                }
              >
                Pokemon 4 || {playerHP4}
              </button>
            </div>
          </div>
          <img
            className={`display userPlayer ${pcHP4 === 0? "imgopacity" : ""}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pcPokemonId[3] + 1
            }.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className={`display userPlayer ${playerHP5 === 0? "imgopacity" : ""}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  playerPokemon5 + 1
                }.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon5}
                disabled={
                  playerHP5 === 0 ? true : pokeballActive ? false : true
                }
              >
                Pokemon 5 || {playerHP5}
              </button>
            </div>
          </div>
          <img
            className={`display userPlayer ${pcHP5 === 0? "imgopacity" : ""}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pcPokemonId[4] + 1
            }.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
      </div>

      {/* <h1>
        PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
      </h1> */}

      <div className="bouncy">
        <div className="bounce-2 ">
          {playerActivePokemon === playerPokemon1 ? (
            <div className="singlePokemonBack bounce-2 ">
              <h6>
                PLAYER HP: {playerHP1} / {pokedex[playerPokemon1].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(playerHP1 * 100) / pokedex[playerPokemon1].base.HP}
                  label={`${Math.round(
                    (playerHP1 * 100) / pokedex[playerPokemon1].base.HP
                  )}%`}
                />
              </h6>
              <img
                src={imagePokemon1}
                className="singlePokemonBack bounce-2 "
              />
            </div>
          ) : playerActivePokemon === playerPokemon2 ? (
            <div className="singlePokemonBack bounce-2 ">
              {" "}
              <h6>
                PLAYER HP: {playerHP2} / {pokedex[playerPokemon2].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(playerHP2 * 100) / pokedex[playerPokemon2].base.HP}
                  label={`${Math.round(
                    (playerHP2 * 100) / pokedex[playerPokemon2].base.HP
                  )}%`}
                />
              </h6>
              <img
                src={imagePokemon2}
                className="singlePokemonBack bounce-2 "
              />
            </div>
          ) : playerActivePokemon === playerPokemon3 ? (
            <div className="singlePokemonBack bounce-2 ">
              {" "}
              <h6>
                PLAYER HP: {playerHP3} / {pokedex[playerPokemon3].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(playerHP3 * 100) / pokedex[playerPokemon3].base.HP}
                  label={`${Math.round(
                    (playerHP3 * 100) / pokedex[playerPokemon3].base.HP
                  )}%`}
                />
              </h6>
              <img
                src={imagePokemon3}
                className="singlePokemonBack bounce-2 "
              />
            </div>
          ) : playerActivePokemon === playerPokemon4 ? (
            <div className="singlePokemonBack bounce-2 ">
              {" "}
              <h6>
                PLAYER HP: {playerHP4} / {pokedex[playerPokemon4].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(playerHP4 * 100) / pokedex[playerPokemon4].base.HP}
                  label={`${Math.round(
                    (playerHP4 * 100) / pokedex[playerPokemon4].base.HP
                  )}%`}
                />
              </h6>
              <img
                src={imagePokemon4}
                className="singlePokemonBack bounce-2 "
              />
            </div>
          ) : (
            <div className="singlePokemonBack bounce-2 ">
              {" "}
              <h6>
                PLAYER HP: {playerHP5} / {pokedex[playerPokemon5].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(playerHP5 * 100) / pokedex[playerPokemon5].base.HP}
                  label={`${Math.round(
                    (playerHP5 * 100) / pokedex[playerPokemon5].base.HP
                  )}%`}
                />
              </h6>
              <img
                src={imagePokemon5}
                className="singlePokemonBack bounce-2 "
              />
            </div>
          )}
        </div>
        <div className="bounce-2 ">
          {pcActivePokemon === pcPokemon1 ? (
            <div className="randomPokemon bounce-2">
              <h6>
                PC HP: {pcHP1} / {pokedex[pcPokemon1].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(pcHP1 * 100) / pokedex[pcPokemon1].base.HP}
                  label={`${Math.round(
                    (pcHP1 * 100) / pokedex[pcPokemon1].base.HP
                  )}%`}
                />
              </h6>
              <img src={imagePCPokemon1} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon2 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP2} / {pokedex[pcPokemon2].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(pcHP2 * 100) / pokedex[pcPokemon2].base.HP}
                  label={`${Math.round(
                    (pcHP2 * 100) / pokedex[pcPokemon2].base.HP
                  )}%`}
                />
              </h6>
              <img src={imagePCPokemon2} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon3 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP3} / {pokedex[pcPokemon3].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(pcHP3 * 100) / pokedex[pcPokemon3].base.HP}
                  label={`${Math.round(
                    (pcHP3 * 100) / pokedex[pcPokemon3].base.HP
                  )}%`}
                />
              </h6>
              <img src={imagePCPokemon3} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon4 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP4} / {pokedex[pcPokemon4].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(pcHP4 * 100) / pokedex[pcPokemon4].base.HP}
                  label={`${Math.round(
                    (pcHP4 * 100) / pokedex[pcPokemon4].base.HP
                  )}%`}
                />
              </h6>
              <img src={imagePCPokemon4} className="randomPokemon bounce-2" />
            </div>
          ) : (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP5} / {pokedex[pcPokemon5].base.HP}
                <ProgressBar
                  className="progress"
                  animated
                  now={(pcHP5 * 100) / pokedex[pcPokemon5].base.HP}
                  label={`${Math.round(
                    (pcHP5 * 100) / pokedex[pcPokemon5].base.HP
                  )}%`}
                />
              </h6>
              <img src={imagePCPokemon5} className="randomPokemon bounce-2" />
            </div>
          )}
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-center">Fight!!</h1>
      </div>

      <p>Attack: {`${pokedex[playerActivePokemon].base.Attack}`} </p>
      <p>Defense: {`${pokedex[playerActivePokemon].base.Defense}`} </p>
      <p>
        Special Attack: {`${pokedex[playerActivePokemon].base["Sp. Attack"]}`}{" "}
      </p>
      <p>
        Special Defense: {`${pokedex[playerActivePokemon].base["Sp. Defense"]}`}{" "}
      </p>
      <p>Speed: {`${pokedex[playerActivePokemon].base.Speed}`} </p>

      <div>
        <p>PcActivePoki: {pcActivePokemon} </p>
      </div>
      {gameOver && <Navigate to="/Score" />}
    </div>
  );
}
