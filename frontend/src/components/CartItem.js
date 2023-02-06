import React from 'react'
import { Stack } from 'react-bootstrap'

export default function CartItem({ id, pokeInfo}) {
    const item = pokeInfo.find(i => i.id === id)
    if (item == null) return null
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        img src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} style={{width: "125px", height: "75px" }}
      </Stack>

    </div>
  )
}
