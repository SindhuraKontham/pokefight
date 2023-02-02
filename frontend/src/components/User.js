import React from "react";
import { useState } from "react";
import ReactSelect from "react-select";
import logo from "../Images/logo.png";

export default function User() {
  const options = [
    { value: "id_1", label: "UserName_1", image: logo },
    { value: "id_2", label: "UserName_2" },
    { value: "id_3", label: "UserName_3" },
    { value: "id_4", label: "UserName_4" },
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="text-center mt-5">
      <h2>Welcome to pokemon Arena Fight!</h2>
      <h4>Let's sign you in </h4>
      <div className="d-flex  flex-column align-items-center  w-50 mt-5 mx-auto">
        <div>
          <button className="btn btn-primary" type="submit">
            Create new Profile
          </button>
        </div>
        <div className="w-75 mt-5">
          <p>OR</p>
          <hr className="border border-primary border-1 opacity-75" />
        </div>

        <div className="mt-4">Choose an existing one:</div>
        <div className="container">
          <div className="mt-5 m-auto w-50">
            <ReactSelect
              options={options}
              onChange={handleChange}
              autoFocus={true}
              formatOptionLabel={(option) => (
                <div className="country-option">
                  <img
                    src={option.image}
                    alt="avatar"
                    className="w-25 me-2"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <span>{option.label}</span>
                </div>
              )}
            />
            <div className="mt-4">
              {selected && <>You've selected {selected.value}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
