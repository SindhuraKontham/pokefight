import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Arena() {
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
  const [playerActivePokemon, setPlayerActivePokemon] = useState();
  const [pcActivePokemon, setPcActivePokemon] = useState();
  const [playerActivePokemonHP, setPlayerActivePokemonHP] = useState();
  const [pcActivePokemonHP, setPcActivePokemonHP] = useState();
  const [activeFightID, setActiveFightID] = useState();

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/fight");
        const res = response.data;
        let activeFight = res.filter((item) => item.active === true);
        setActiveFightID(activeFight[0]._id);
        setPlayerHP1(activeFight[0].userPokemon1.HP);
        setPlayerHP2(activeFight[0].userPokemon2.HP);
        setPlayerHP3(activeFight[0].userPokemon3.HP);
        setPlayerHP4(activeFight[0].userPokemon4.HP);
        setPlayerHP5(activeFight[0].userPokemon5.HP);
        setPcHP1(activeFight[0].pcPokemon1.HP);
        setPcHP2(activeFight[0].pcPokemon2.HP);
        setPcHP3(activeFight[0].pcPokemon3.HP);
        setPcHP4(activeFight[0].pcPokemon4.HP);
        setPcHP5(activeFight[0].pcPokemon5.HP);
        if (activeFight[0].pcPokemon1.active === true) {
          setPcActivePokemon("pcPokemon1");
          setPcActivePokemonHP(activeFight[0].pcPokemon1.HP);
        } else if (activeFight[0].pcPokemon2.active === true) {
          setPcActivePokemon("pcPokemon2");
          setPcActivePokemonHP(activeFight[0].pcPokemon2.HP);
        } else if (activeFight[0].pcPokemon3.active === true) {
          setPcActivePokemon("pcPokemon3");
          setPcActivePokemonHP(activeFight[0].pcPokemon3.HP);
        } else if (activeFight[0].pcPokemon4.active === true) {
          setPcActivePokemon("pcPokemon4");
          setPcActivePokemonHP(activeFight[0].pcPokemon4.HP);
        } else {
          setPcActivePokemon("pcPokemon5");
          setPcActivePokemonHP(activeFight[0].pcPokemon5.HP);
        }
        if (activeFight[0].userPokemon1.active === true) {
          setPlayerActivePokemon("userPokemon1");
          setPlayerActivePokemonHP(activeFight[0].userPokemon1.HP);
        } else if (activeFight[0].userPokemon2.active === true) {
          setPlayerActivePokemon("userPokemon2");
          setPlayerActivePokemonHP(activeFight[0].userPokemon2.HP);
        } else if (activeFight[0].userPokemon3.active === true) {
          setPlayerActivePokemon("userPokemon3");
          setPlayerActivePokemonHP(activeFight[0].userPokemon3.HP);
        } else if (activeFight[0].userPokemon4.active === true) {
          setPlayerActivePokemon("userPokemon4");
          setPlayerActivePokemonHP(activeFight[0].userPokemon4.HP);
        } else {
          setPlayerActivePokemon("userPokemon5");
          setPlayerActivePokemonHP(activeFight[0].userPokemon5.HP);
        }

        // console.log(activeFight[0].userPokemon1.active);
        // console.log(pcActivePokemon);

        return res;
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  //   more difficulty (0-1) means more special attacks for the PC and less to Player:
  let difficulty = 0.2;

  //   Delay for the pc attack in milliseconds:
  const delay = 2000;

  const [playerSpAttack, setPlayerSpAttack] = useState(
    Math.random() > difficulty ? true : false
  );
  const [pcSpAttack, setPcSpAttack] = useState(
    Math.random() > difficulty ? false : true
  );

  //   let putData = {};
  //   if (playerActivePokemon === userPokemon1) {
  //     userPokemon1: {
  //       HP: playerActivePokemon;
  //     }
  //   } else {
  //     400;
  //   }

  //   const PlayerAttack = () => {
  //     playerActivePokemon.axios
  //       .put(`http://localhost:3001/fight/${activeFightID}`, putData)
  //       .then((res) => {
  //         setSteps((steps) => {
  //           return steps.map((step) => {
  //             if (step.id === res.data.id) {
  //               return res.data;
  //             } else {
  //               return step;
  //             }
  //           });
  //         });

  //         toast.success("Successfully updated step");
  //       });

  //     setPcHP(
  //       pcHP -
  //         (pokedex[pcActivePokemon - 1].base.Defense *
  //           pokedex[playerActivePokemon - 1].base.Attack) /
  //           230
  //     );

  //     setTimeout(() => {
  //       setPlayerHP(
  //         playerHP -
  //           ((pcSpAttack
  //             ? pokedex[playerActivePokemon - 1].base["Sp. Defense"]
  //             : pokedex[playerActivePokemon - 1].base.Defense) *
  //             (pcSpAttack
  //               ? pokedex[pcActivePokemon - 1].base["Sp. Attack"]
  //               : pokedex[pcActivePokemon - 1].base.Attack)) /
  //             230
  //       );
  //       setPcSpAttack(Math.random() > difficulty ? false : true);
  //       setPlayerSpAttack(Math.random() > difficulty ? true : false);
  //     }, delay);
  //   };

  return (
    <div>
      Arena
      <div>
        <button>Attack</button>
        <h2>
          User active pokemon:{playerActivePokemon}
          {playerActivePokemonHP}
        </h2>
        <button>Change Pokemon</button>
        <button>
          <h4>pokemon 1</h4>
        </button>
        <p>HP: {playerHP1}</p>
        <button>
          {" "}
          <h4>pokemon 2</h4>
        </button>
        <p>HP: {playerHP2}</p>
        <button>
          {" "}
          <h4>pokemon 3</h4>
        </button>
        <p>HP: {playerHP3}</p>
        <button>
          <h4>pokemon 4</h4>
        </button>
        <p>HP: {playerHP4}</p>
        <button>
          {" "}
          <h4>pokemon 5</h4>
        </button>
        <p>HP: {playerHP5}</p>
      </div>
      <div>
        <h2>
          Pc active pokemon:{pcActivePokemon}
          {pcActivePokemonHP}
        </h2>
        <h4>pokemon 1</h4>
        <p>HP: {pcHP1}</p>
        <h4>pokemon 2</h4>
        <p>HP: {pcHP2}</p>
        <h4>pokemon 3</h4>
        <p>HP: {pcHP3}</p>
        <h4>pokemon 4</h4>
        <p>HP: {pcHP4}</p>
        <h4>pokemon 5</h4>
        <p>HP: {pcHP5}</p>
      </div>
    </div>
  );
}
