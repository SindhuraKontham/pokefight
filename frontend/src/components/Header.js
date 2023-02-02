import React from "react";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <div className="LogoDiv">
      <img src={logo} alt="Pokemon logo" />
      <h2>Arena Fight</h2>
    </div>
  );
}
