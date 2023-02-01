import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import Pokemon from "./components/Pokemon";

export default function ListPage({ searchResults }) {
     
    const results = searchResults.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) 

     const content = results?.length ? results : <article><p>No Matching Pokemon's</p></article>

  return (
    // <div>
        <main>{content}</main>
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //      <Card.Title>here name of pokemon </Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // </div>
  )
}
