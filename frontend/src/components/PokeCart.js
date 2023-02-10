import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import './pokemoninfo.css';
import cross from "./icons/cross.png";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function PokeCart({ cart, setCart,activeUser,setActiveUser,cartQuantity }) {
  const navigate = useNavigate();
console.log(cart)
  // const deleteCartItem= () => {
  //   axios.delete(`http://localhost:4000/pokemonCart/${name}`).then((res) => {
  //     setCart((cart) => {
  //       return cart.filter((cart) => {
  //         console.log(res.data, cart.id);
  //         return cart.id !== id;
  //       });
  //     });
  //   });
  // };

  const handleOnClick = (e) => {
   
    console.log(e.target.value)
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
      <svg
        onClick={() => {
          navigate(-1);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-left-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>
    <div className="cardmain">
       {cart.map((pokemon,index) => {
         return (
      <Card className="cardpoke"border="primary" style={{ width: '13rem' , height: '13rem'}}>
              <button onClick={() => {
                const url = `http://localhost:3001/pokemonCart/${pokemon.name}`
                console.log(url)
                  axios.delete(`http://localhost:3001/pokemonCart/${pokemon.name}`).then((res) => {
                    setCart((cart) => {
                      console.log(cart)
                      return cart.filter((cart) => {
                        console.log(res.data, cart.name);
                        return cart.name !== pokemon.name;
                      });
                    });
                  });
              }}><img className="cross" src={cross} width={30} height={30}/> </button>
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
        <NavLink to="/fight">
        <button className="playbtn" id="wins" >
              Go to Arena ??
        </button>
        </NavLink>
    </div>
    </div>
  );
}
