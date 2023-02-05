import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./search.css";
import PokemonInfo from "./PokemonInfo";
// import { pokemons, setSearchResults } from "../App";

export default function Search({
  handleSubmit,
  setQuery,
  pokeInfo,
}) {
  
  console.log(
    pokeInfo.filter((pokemon) => pokemon.name.toLowerCase().includes("saur"))
  );

  return (
    <form className="input_form" onSubmit={handleSubmit}>
      <input
        className="search_input"
        placeholder="Search Pokemon..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <button className="search_button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
