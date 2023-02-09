import axios from "axios";
import React, { useState, useEffect } from "react";

function Pokemon({ url }) {
  const [poke, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                    <p>HP: {poke.stats?.[0].base_stat}</p>
                      <p>Speed: {poke.stats?.[5].base_stat}</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Attack: {poke.stats?.[1].base_stat}</p>
                        <p>S-Attack: {poke.stats?.[2].base_stat}</p>
                      </div>
                      <div>
                        <p>Defense: {poke.stats?.[3].base_stat}</p>
                        <p>S-Defense: {poke.stats?.[4].base_stat}</p>
                      </div>
                    </div>
    </div>
  );
}

export default Pokemon;