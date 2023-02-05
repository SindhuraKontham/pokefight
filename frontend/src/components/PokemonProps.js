import {Button, Card} from "react-bootstrap"

export default function PokemonProps({pro}) {

const imgUrl = `https://img.pokemondb.net/artwork/large/${pro.name}.jpg`


    const quantity = 0
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height="150px" style={{objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>
            <span>{pro.name}</span>
        </Card.Title>
          <div>
            {quantity === 0 ? (
                <div>
                <Button>Choose</Button>
                <Button>More Info</Button>
                </div>
            ): null}
          </div>
      </Card.Body>
    </Card>
  )
}
