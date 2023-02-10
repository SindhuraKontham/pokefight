import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import pokedex from "./pokedex.json";
import "./fightarena.css";
import "./displayPokemons.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Ball from "./icons/pokemonball.png";
import { Navigate } from "react-router-dom";
import Score from "./Score";

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

  useEffect(() => {
    const pcPokemonId = [];
    while (pcPokemonId.length < 5) {
      let r = Math.floor(Math.random() * 100) + 1;
      if (pcPokemonId.indexOf(r) === -1) pcPokemonId.push(r);
    }
    setPcPokemonId(pcPokemonId);
    setImagePCPokemon1(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[0]}.png`
    );
    setImagePCPokemon2(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[1]}.png`
    );
    setImagePCPokemon3(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[2]}.png`
    );
    setImagePCPokemon4(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[3]}.png`
    );
    setImagePCPokemon5(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[4]}.png`
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
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${userPokemons[0].pok_id}.png`
        );
        setImagePokemon2(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${userPokemons[1].pok_id}.png`
        );
        setImagePokemon3(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${userPokemons[2].pok_id}.png`
        );
        setImagePokemon4(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${userPokemons[3].pok_id}.png`
        );
        setImagePokemon5(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${userPokemons[4].pok_id}.png`
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
  let difficulty = 0.2;

  //   Delay for the pc attack in milliseconds:
  const delay = 2000;

  //   Start of Logic

  //   States

  const [pcHP, setPcHP] = useState(pokedex[pcPokemon1].base.HP);

  const [playerHP, setPlayerHP] = useState(pokedex[playerPokemon1].base.HP);

  const [pcActivePokemon, setPcActivePokemon] = useState(pcPokemon1);

  const [playerActivePokemon, setPlayerActivePokemon] =
    useState(playerPokemon1);

  const [playerHP1, setPlayerHP1] = useState(pokedex[playerPokemon1].base.HP);
  const [playerHP2, setPlayerHP2] = useState(pokedex[playerPokemon2].base.HP);
  const [playerHP3, setPlayerHP3] = useState(pokedex[playerPokemon3].base.HP);
  const [playerHP4, setPlayerHP4] = useState(pokedex[playerPokemon4].base.HP);
  const [playerHP5, setPlayerHP5] = useState(pokedex[playerPokemon5].base.HP);

  const [pcHP1, setPcHP1] = useState(pokedex[pcPokemon1].base.HP);
  const [pcHP2, setPcHP2] = useState(pokedex[pcPokemon2].base.HP);
  const [pcHP3, setPcHP3] = useState(pokedex[pcPokemon3].base.HP);
  const [pcHP4, setPcHP4] = useState(pokedex[pcPokemon4].base.HP);
  const [pcHP5, setPcHP5] = useState(pokedex[pcPokemon5].base.HP);

  const [playerSpAttack, setPlayerSpAttack] = useState(
    Math.random() > difficulty ? true : false
  );
  const [pcSpAttack, setPcSpAttack] = useState(
    Math.random() > difficulty ? false : true
  );

  //   On pc Pokemon change action changes randomly after each attack

  const SavePcHPandChange = () => {
    if (pcActivePokemon === pcPokemon1) {
      setPcHP1(pcHP);
      if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else {
        alert("Game over");
      }
    } else if (pcActivePokemon === pcPokemon2) {
      setPcHP2(pcHP);
      if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else {
        alert("Game over");
      }
    } else if (pcActivePokemon === pcPokemon3) {
      setPcHP3(pcHP);
      if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else {
        alert("Game over");
      }
    } else if (pcActivePokemon === pcPokemon4) {
      setPcHP4(pcHP);
      if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else {
        alert("Game over");
      }
    } else {
      setPcHP5(pcHP);
      if (pcHP1 > 0) {
        setPcActivePokemon(pcPokemonId[0]);
      } else if (pcHP3 > 0) {
        setPcActivePokemon(pcPokemonId[2]);
      } else if (pcHP4 > 0) {
        setPcActivePokemon(pcPokemonId[3]);
      } else if (pcHP2 > 0) {
        setPcActivePokemon(pcPokemonId[1]);
      } else if (pcHP5 > 0) {
        setPcActivePokemon(pcPokemonId[4]);
      } else {
        alert("Game over");
      }
    }
  };

  const RefreshPcHP = () => {
    if (pcActivePokemon === pcPokemon1) {
      setPcHP(pcHP1);
    } else if (pcActivePokemon === pcPokemon2) {
      setPcHP(pcHP2);
    } else if (pcActivePokemon === pcPokemon3) {
      setPcHP(pcHP3);
    } else if (pcActivePokemon === pcPokemon4) {
      setPcHP(pcHP4);
    } else {
      setPcHP(pcHP5);
    }
  };

  //   Onclick action

  const SelectPokemon1 = () => {
    setPlayerActivePokemon(playerPokemon1);
    setPlayerHP(playerHP1);
  };

  const SelectPokemon2 = () => {
    setPlayerActivePokemon(playerPokemon2);
    setPlayerHP(playerHP2);
  };

  const SelectPokemon3 = () => {
    setPlayerActivePokemon(playerPokemon3);
    setPlayerHP(playerHP3);
  };

  const SelectPokemon4 = () => {
    setPlayerActivePokemon(playerPokemon4);
    setPlayerHP(playerHP4);
  };

  const SelectPokemon5 = () => {
    setPlayerActivePokemon(playerPokemon5);
    setPlayerHP(playerHP5);
  };
  const ChangePokemon = () => {
    if (playerActivePokemon === playerPokemon1) {
      setPlayerHP1(playerHP);
    } else if (playerActivePokemon === playerPokemon2) {
      setPlayerHP2(playerHP);
    } else if (playerActivePokemon === playerPokemon3) {
      setPlayerHP3(playerHP);
    } else if (playerActivePokemon === playerPokemon4) {
      setPlayerHP4(playerHP);
    } else {
      setPlayerHP5(playerHP);
    }
  };

  //   Attack function

  const PlayerAttack = () => {
    // console.log(
    //   pcHP,
    //   pcHPTaken,
    //   playerHP,
    //   playerTaken,
    //   pcActivePokemon,
    //   playerActivePokemon
    // );
    const pcHPTaken =
      (pokedex[pcActivePokemon].base.Defense *
        pokedex[playerActivePokemon].base.Attack) /
      300;
    const playerTaken = pcSpAttack
      ? (pokedex[playerActivePokemon].base["Sp. Defense"] *
          pokedex[pcActivePokemon].base["Sp. Attack"]) /
        300
      : (pokedex[playerActivePokemon].base.Defense *
          pokedex[pcActivePokemon].base.Attack) /
        300;

    if (
      pokedex[playerActivePokemon].base.Speed >
      pokedex[pcActivePokemon].base.Speed
    ) {
      console.log(
        pcHP,
        pcHPTaken,
        playerHP,
        playerTaken,
        pcActivePokemon,
        playerActivePokemon
      );
      RefreshPcHP();
      console.log(
        pcHP,
        pcHPTaken,
        playerHP,
        playerTaken,
        pcActivePokemon,
        playerActivePokemon
      );
      pcHP - pcHPTaken > 0 ? setPcHP(pcHP - pcHPTaken) : setPcHP(0);

      setTimeout(() => {
        console.log(
          pcHP,
          pcHPTaken,
          playerHP,
          playerTaken,
          pcActivePokemon,
          playerActivePokemon
        );
        playerHP - playerTaken > 0
          ? setPlayerHP(playerHP - playerTaken)
          : setPlayerHP(0);
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
        console.log(
          pcHP,
          pcHPTaken,
          playerHP,
          playerTaken,
          pcActivePokemon,
          playerActivePokemon
        );
      }, delay);
    } else {
      RefreshPcHP();

      playerHP - playerTaken > 0
        ? setPlayerHP(playerHP - playerTaken)
        : setPlayerHP(0);
      console.log(
        pcHP,
        pcHPTaken,
        playerHP,
        playerTaken,
        pcActivePokemon,
        playerActivePokemon
      );
      setTimeout(() => {
        console.log(
          pcHP,
          pcHPTaken,
          playerHP,
          playerTaken,
          pcActivePokemon,
          playerActivePokemon
        );
        pcHP - pcHPTaken > 0 ? setPcHP(pcHP - pcHPTaken) : setPcHP(0);
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
        console.log(
          pcHP,
          pcHPTaken,
          playerHP,
          playerTaken,
          pcActivePokemon,
          playerActivePokemon
        );
      }, delay);
    }
  };

  //  Special Attack function

  const PlayerSpAttack = () => {
    const pcHPTaken =
      (pokedex[pcActivePokemon].base["Sp. Defense"] *
        pokedex[playerActivePokemon].base["Sp. Attack"]) /
      230;
    const playerTaken =
      ((pcSpAttack
        ? pokedex[playerActivePokemon].base["Sp. Defense"]
        : pokedex[playerActivePokemon].base.Defense) *
        (pcSpAttack
          ? pokedex[pcActivePokemon].base["Sp. Attack"]
          : pokedex[pcActivePokemon].base.Attack)) /
      230;
    if (
      pokedex[playerActivePokemon].base.Speed >
      pokedex[pcActivePokemon].base.Speed
    ) {
      RefreshPcHP();
      pcHP - pcHPTaken > 0 ? setPcHP(pcHP - pcHPTaken) : setPcHP(0);

      setTimeout(() => {
        playerHP - playerTaken > 0
          ? setPlayerHP(playerHP - playerTaken)
          : setPlayerHP(0);
        setPcSpAttack(Math.random() > difficulty ? false : true);
        setPlayerSpAttack(Math.random() > difficulty ? true : false);
        SavePcHPandChange();
      }, delay);
    } else {
      RefreshPcHP();
      playerHP - playerTaken > 0
        ? setPlayerHP(playerHP - playerTaken)
        : setPlayerHP(0);
      setTimeout(() => {
        pcHP - pcHPTaken > 0 ? setPcHP(pcHP - pcHPTaken) : setPcHP(0);
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

  console.log(gameOver);
  return (
    <div className="Fightarena">
      <div>
        {/* <DisplayPokemons props = {props} classname="userPlayer"/> */}
        <div className="span">
          <div>
            <div>
              <img
                className="display userPlayer"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon1}.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon1}
                disabled={playerHP1 === 0 ? true : false}
              >
                Pokemon 1 || {playerHP1}
              </button>
            </div>
          </div>
          <button
          className="pokball"
          onClick={ChangePokemon}><img
              src={Ball}
              // src={Pokeball}
              alt="Pokeball"
              style={{ width: "6rem", height: "6rem" }}
            /> </button>
      <div>
      <button className="plybtn" onClick={PlayerAttack} style={{ width: "12rem", height: "4rem" }}>PLAYER: attack</button>
      {playerSpAttack && (
        <button className="plybtn" onClick={PlayerSpAttack} style={{width: "12rem", height: "4rem"  }}>PLAYER: special attack</button>
        )}
      </div>
     
  
          
          <img
            className="display userPlayer"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[0]}.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className="display userPlayer"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon2}.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon2}
                disabled={playerHP2 === 0 ? true : false}
              >
                Pokemon 2|| {playerHP2}
              </button>
            </div>
          </div>
          <img
            className="display userPlayer"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[1]}.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className="display userPlayer"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon3}.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon3}
                disabled={playerHP3 === 0 ? true : false}
              >
                Pokemon 3 {playerHP3}
              </button>
            </div>
          </div>
          <img
            className="display userPlayer"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[2]}.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className="display userPlayer"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon4}.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon4}
                disabled={playerHP3 === 0 ? true : false}
              >
                Pokemon 4 || {playerHP4}
              </button>
            </div>
          </div>
          <img
            className="display userPlayer"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[3]}.png`}
            alt="userpokemons"
            width={150}
            height={110}
          />
        </div>
        <div className="span">
          <div>
            <div>
              <img
                className="display userPlayer"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerPokemon5}.png`}
                alt="userpokemons"
                width={150}
                height={110}
              />
            </div>
            <div>
              <button
                className="playbtn"
                onClick={SelectPokemon5}
                disabled={playerHP5 === 0 ? true : false}
              >
                Pokemon 5 || {playerHP5}
              </button>
            </div>
          </div>
          <img
            className="display userPlayer"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pcPokemonId[4]}.png`}
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
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img src={imagePokemon1} className="singlePokemonBack bounce-2 " />
          </div>
        ) : playerActivePokemon === playerPokemon2 ? (
          <div className="singlePokemonBack bounce-2 ">
            {" "}
            <h6>
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img src={imagePokemon2} className="singlePokemonBack bounce-2 " />
          </div>
        ) : playerActivePokemon === playerPokemon3 ? (
          <div className="singlePokemonBack bounce-2 ">
            {" "}
            <h6>
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img src={imagePokemon3} className="singlePokemonBack bounce-2 " />
          </div>
        ) : playerActivePokemon === playerPokemon4 ? (
          <div className="singlePokemonBack bounce-2 ">
            {" "}
            <h6>
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img src={imagePokemon4} className="singlePokemonBack bounce-2 " />
          </div>
        ) : playerActivePokemon === playerPokemon5 ? (
          <div className="singlePokemonBack bounce-2 ">
            {" "}
            <h6>
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img src={imagePokemon5} className="singlePokemonBack bounce-2 " />
          </div>
        ) : (
          <div className="singlePokemonBack bounce-2 ">
            {" "}
            <h6>
              PLAYER HP: {playerHP} / {pokedex[playerActivePokemon].base.HP}
              <ProgressBar className="progress" animated now={playerHP} />
            </h6>
            <img className="singlePokemonBack bounce-2 " src={imagePokemon1} />
          </div>
        )}
      </div>
      <div className="bounce-2 ">

          {pcActivePokemon === pcPokemon1 ? (
            <div className="randomPokemon bounce-2">
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img src={imagePCPokemon1} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon2 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img src={imagePCPokemon2} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon3 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img src={imagePCPokemon3} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon4 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img src={imagePCPokemon4} className="randomPokemon bounce-2" />
            </div>
          ) : pcActivePokemon === pcPokemon5 ? (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img src={imagePCPokemon5} className="randomPokemon bounce-2" />
            </div>
          ) : (
            <div className="randomPokemon bounce-2">
              {" "}
              <h6>
                PC HP: {pcHP} / {pokedex[pcActivePokemon].base.HP}
                <ProgressBar className="progress" animated now={pcHP} />
              </h6>
              <img className="randomPokemon bounce-2" src={imagePCPokemon1} />
            </div>
          )}
        </div>
      </div>
      {/* <div className="bounce-2 ">

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
        <p>Attack: {`${pokedex[pcActivePokemon].base.Defense}`} </p>
        <p>Defense: {`${pokedex[pcActivePokemon].base.Defense}`} </p>
        <p>
          Special Attack: {`${pokedex[pcActivePokemon].base["Sp. Attack"]}`}{" "}
        </p>
        <p>
          Special Defense: {`${pokedex[pcActivePokemon].base["Sp. Defense"]}`}{" "}
        </p>
        <p>Speed: {`${pokedex[pcActivePokemon].base.Speed}`} </p>
      </div>
      <div>
        <p>active poki: {pcActivePokemon}</p>
        <p>
          poki1 {pcPokemon1}: {pcHP1}{" "}
        </p>
        <p>
          poki2 {pcPokemon2}: {pcHP2}
        </p>
        <p>
          poki3 {pcPokemon3}: {pcHP3}
        </p>
        <p>
          poki4 {pcPokemon4}: {pcHP4}
        </p>
        <p>
          poki5 {pcPokemon5}: {pcHP5}
        </p>
      </div>
      {gameOver && <Navigate to="/Score" />}
    </div>
  );
}
