import React from "react";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import axios from "axios";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import F0 from "../Images/F0.png";
import F1 from "../Images/F1.png";
import F2 from "../Images/F2.png";
import F3 from "../Images/F3.png";
import F4 from "../Images/F4.png";

export default function Header({ activeUser, setActiveUser }) {
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
        <div>
          <button className="LogOffButton" onClick={LogOff}>
            &nbsp;
            <FaPowerOff />
            <p>Log Off</p>
          </button>{" "}
          <NavLink to={"/"} className="text">
            <button className="ChangeUserButton" onClick={LogOff}>
              <p>Change user</p>
            </button>
          </NavLink>
          <NavLink to={"/CreateUser"} className="text">
            <button className="CreateUserButton" onClick={LogOff}>
              <p>Create new user</p>
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
