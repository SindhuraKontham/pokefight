import React from 'react'

const Pokemon = ({ pokemon }) => {
  // console.log(pokemon.name)
  // console.log(pokemon.type)
  // console.log(pokemon.base)
  return (
    <article>
      <h2>{pokemon.name.english}</h2>
      <p>Type: {pokemon.type[0]}, {pokemon.type[1]}, {pokemon.type[2]}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defense: {pokemon.base.Defense}</p>
      <p>Speed: {pokemon.base.Speed}</p>

    </article>
  )
}

export default Pokemon
