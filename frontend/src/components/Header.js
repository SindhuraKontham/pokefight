import React from "react";
import logo from "../Images/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="LogoDiv shadow-sm">
        <img src={logo} alt="Pokemon logo" />
        <h2>Arena Fight</h2>
        <Navbar />
      </div>
     
    </>
  );
}
