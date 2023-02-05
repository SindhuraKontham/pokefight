import React from "react";
import logo from "../Images/logo.png";
import Navbar from "./Navbar";

export default function Header({cartQuantity, openCart, closeCart, isOpen}) {
  return (
    <>
      <div className="LogoDiv shadow-sm">
        <img src={logo} alt="Pokemon logo" />
        <h2>Arena Fight</h2>
        <Navbar cartQuantity={cartQuantity} openCart={openCart} closeCart={closeCart} isOpen={isOpen}/>
      </div>
     
    </>
  );
}
