import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./search.css";
// import { pokemons, setSearchResults } from "../App";

export default function Search({ pokemons, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(pokemons);

    const searchWord = e.target.value;
    const resultsArray = pokemons.filter((pokemon) => {
      return (
        pokemon.name.english.toLowerCase().includes(searchWord.toLowerCase()) ||
        pokemon.type.toLowerCase().includes(e.target.value)
      );
    });

    setSearchResults(resultsArray);
  };

  return (
    <div>
      <form className="input_form" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          placeholder="Search Pokemon"
          id="search"
          onChange={handleSearchChange}
        />

        <button className="search_button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
