import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PokemonType from "./PokemonType";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import './pokemoninfo.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function PokemonInfo({cart, setCart}) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        // console.log(response.data.results);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);



  return (
    <div>
        <div  className="cart" > 
                  <Link
                    to="/cart">
                    <ShoppingCartIcon sx={{ fontSize: 60 }}></ShoppingCartIcon>
                  </Link>
        </div>
        <div className="cardmain">
      {pokemons.map((pokemon,index) => {
         return (
            <Card className="card"border="primary" style={{ width: '13rem' , height: '17rem'}}>
              
              <PokemonType id={index} name={pokemon.name}/>
              <Card.Img
                variant="top"
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
                className="cardImage"
              />
              <Card.Body>
                <Card.Title className="title"><br/> {pokemon.name}</Card.Title><br/>
                <button  
                onClick = {() => {
                    setCart({...cart, image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,name: pokemon.name})
                }}
                className="title button"> Add</button>
              </Card.Body>
            </Card>
          );
      })}
      </div>
     </div>
  );
}

export default PokemonInfo;
