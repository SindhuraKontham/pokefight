import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import style from './search.css'

export default function Search({ pokemons, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(pokemons)

    const resultsArray = pokemons.filter(pokemon => pokemon.name.includes(e.target.value) || pokemon.type.includes(e.target.value))


    setSearchResults(resultsArray)
  }

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
