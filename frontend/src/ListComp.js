import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import PokemonProps from "./components/PokemonProps"

export default function ListComp({ pokemon }) {
  const [data, setData] = useState([]);

  //   console.log(pokemon);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        const pok = response.data.results;
        // console.log(pok);
        setData(pok);
        return pok;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row>
        <Col>
        {data.map((p, index) => {
          return (
            <>
              <Row>
                <Col index={p.name} md={{ span: 4, offset: 4 }}><PokemonProps pro={p}/>
                  
                {/* //   <img
                //     style={{ height: "5rem", width: "6rem" }}
                //     src={`https://img.pokemondb.net/artwork/large/${p.name}.jpg`}
                //     alt={p.name}
            //       /> */}
                </Col>
              </Row>
            </>
          );
        })}

        </Col>
      </Row>
    </>
  );
}
