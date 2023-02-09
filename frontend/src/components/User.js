import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import logo from "../Images/logo.png";
import F0 from "../Images/F0.png";
import F1 from "../Images/F1.png";
import F2 from "../Images/F2.png";
import F3 from "../Images/F3.png";
import F4 from "../Images/F4.png";
import Header from "../components/Header";

export default function User({ setActiveUser,activeUser }) {
  const [user, setUser] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  function putActiveUser() {
    axios.put(`http://localhost:3001/users/${selected._id}`, {}).then(() => {
      setActiveUser(selected);
    });
  }

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <div>
       <Header
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
    <div className="mt-5">
      <h2 className="User GameBoyFont">Welcome to Pokemon Arena Fight!</h2>
      <h4 className="User GameBoyFont">Let's sign you in </h4>
      <div className="d-flex  flex-column align-items-center  w-50 mt-5 mx-auto">
        <div>
          <nav>
            <NavLink to="/CreateUser">
              <button className="btn btn-primary" type="submit">
                Create new Profile
              </button>
            </NavLink>
          </nav>
        </div>
        <div className="w-75 mt-5">
          <p className="User GameBoyFont">OR</p>
          <hr className="border border-primary border-1 opacity-75" />
        </div>

        <div className="mt-4 GameBoyFont">Choose an existing profile:</div>
        <div className="container">
          <div className="mt-5 m-auto w-50">
            <ReactSelect
              options={user}
              onChange={handleChange}
              autoFocus={true}
              formatOptionLabel={(user) => (
                <div className="user-option GameBoyFont">
                  {user.img === 0 && (
                    <img
                      src={F0}
                      alt="avatar"
                      className="w-25 me-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  {user.img === 1 && (
                    <img
                      src={F1}
                      alt="avatar"
                      className="w-25 me-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  {user.img === 2 && (
                    <img
                      src={F2}
                      alt="avatar"
                      className="w-25 me-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  {user.img === 3 && (
                    <img
                      src={F3}
                      alt="avatar"
                      className="w-25 me-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  {user.img === 4 && (
                    <img
                      src={F4}
                      alt="avatar"
                      className="w-25 me-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <span>{user.username}</span>
                </div>
              )}
            />
            <div className="mt-5 User">
              {selected && (
                <NavLink to="/pokemons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={putActiveUser}
                  >
                    Play as {selected.username}
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
