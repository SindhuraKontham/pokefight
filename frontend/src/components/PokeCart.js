import React from "react";
import Card from "react-bootstrap/Card";
import './pokemoninfo.css';
import cross from "./icons/cross.png";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PokeCart({ cart, setCart,activeUser,setActiveUser,cartQuantity }) {

  const handleOnClick = () => {
    const stateCopy = cart.slice();
    let index = stateCopy.findIndex((x) => x.cart === cart.cart);
    // stateCopy.splice(index, 1);
    // setCart(stateCopy);
  }

  return (
    <div>
    <Header
     activeUser={activeUser}
     setActiveUser={setActiveUser}
   />
     <Navbar
        cartQuantity={cartQuantity}
      />
    <div className="cardmain">
       {cart.map((pokemon,index) => {
         return (
      <Card className="cardpoke"border="primary" style={{ width: '13rem' , height: '13rem'}}>
              <img onClick={handleOnClick} className="cross" src={cross} width={30} height={30}/>
              <Card.Img
                variant="top"
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
                className="cardImage"
              />
              <Card.Body>
                <Card.Title className="title"><br/> {pokemon.name}</Card.Title>
              </Card.Body>
            </Card>
         )})}
        <NavLink to="/fightarena">
        <button className="playbtn" id="wins" >
              Go to Arena ??
        </button>
        </NavLink>
    </div>
    </div>
  );
}
