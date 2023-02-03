import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";

export default function ListPage({ searchResults }) {
  const results = searchResults.map((pokemon) => (
    <PokemonInfo key={pokemon.id} pokemon={pokemon} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Pokemon's</p>
    </article>
  );

  return (
    <main>{content}</main>
  )
  
}
