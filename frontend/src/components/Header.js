import React from "react";
import logo from "../Images/logo.png";
import Ball from "./icons/pokemonball.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className="LogoDiv">
      <img src={logo} alt="Pokemon logo" />
      <h2>Arena Fight</h2>
    {/* </div> */}
     {/* <div className="cart"> */}
     <Link to="/cart">
       <img
         className="pokeball"
         src={Ball}
         alt="pokeball"
         width={70}
         height={70}
       ></img>
     </Link>
   </div>
   </>
  );
}
