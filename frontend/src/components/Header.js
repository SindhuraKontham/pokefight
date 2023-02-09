import React from "react";
import { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";
import axios from "axios";
import logo from "../Images/logo.png";
import Ball from "./icons/pokemonball.png";
import { Link } from "react-router-dom";
import F0 from "../Images/F0.png";
import F1 from "../Images/F1.png";
import F2 from "../Images/F2.png";
import F3 from "../Images/F3.png";
import F4 from "../Images/F4.png";
import Navbar from "./Navbar";

export default function Header({
  activeUser,
  setActiveUser,
  cartQuantity,
  openCart,
  closeCart,
  isOpen,
}) {
  const [clicked, setIsClicked] = useState(false);

  const clickProfile = () => {
    setIsClicked(!clicked);
  };

  function LogOff() {
    axios.put(`http://localhost:3001/users/${activeUser._id}`, {}).then(() => {
      setActiveUser();
      setIsClicked(!clicked);
    });
  }

  return (
    <div className="blueHeader GameBoyFont">
      <div className="LogoDiv">
        <img src={logo} alt="Pokemon logo" />
        <h2>Arena Fight</h2>
      </div>

      {/* <Navbar
        cartQuantity={cartQuantity}
        openCart={openCart}
        closeCart={closeCart}
        isOpen={isOpen}
      /> */}
      {activeUser != null && (
        <button className="userDescription" onClick={clickProfile}>
          {activeUser.img === 0 && <img src={F0} className="facePic" />}
          {activeUser.img === 1 && <img src={F1} className="facePic" />}
          {activeUser.img === 2 && <img src={F2} className="facePic" />}
          {activeUser.img === 3 && <img src={F3} className="facePic" />}
          {activeUser.img === 4 && <img src={F4} className="facePic" />}
          <h6>{activeUser.username}</h6>
        </button>
      )}
      {clicked && (
        <button className="LogOffButton" onClick={LogOff}>
          &nbsp;
          <FaPowerOff />
          <p>Log Off</p>
        </button>
      )}

      {/* <Link to="/cart">
        <img
          className="pokeball"
          src={Ball}
          alt="pokeball"
          width={70}
          height={70}
        ></img>
      </Link> */}

      
    </div>
  );
}
