import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import ProfilePic0 from "../Images/0.png";
import ProfilePic1 from "../Images/1.png";
import ProfilePic2 from "../Images/2.png";
import ProfilePic3 from "../Images/3.png";
import ProfilePic4 from "../Images/4.png";

export default function CreateNewUser({ setActiveUser }) {
  const [picture, setPicture] = useState(0);
  const [username, setUsername] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setPicture(selectedIndex);
  };

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleClick(e) {
    if (!username) {
      e.preventDefault();
      alert("please enter an username!");
    }
  }
  const postData = {
    img: picture,
    username: username,
  };

  function createUser() {
    if (username.length != 0) {
      axios.post("http://localhost:3001/users", postData).then((res) => {
        setActiveUser(res.data);
      });
    }
  }

  return (
    <div className="text-center mt-5  ">
      <h2 className="GameBoyFont">Got it, let's sign you up!</h2>
      <Card.Subtitle className="GameBoyFont">
        Choose a Profile picture and username
      </Card.Subtitle>
      <Card className="CarouselContainer">
        <Carousel
          variant="dark"
          style={{ backgroundColor: "none" }}
          activeIndex={picture}
          onSelect={handleSelect}
          indicators={false}
        >
          <Carousel.Item interval={1000000}>
            <img src={ProfilePic0} className="profilePicBig" />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img src={ProfilePic1} className="profilePicBig" />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img src={ProfilePic2} className="profilePicBig" />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img src={ProfilePic3} className="profilePicBig" />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img src={ProfilePic4} className="profilePicBig" />
          </Carousel.Item>
        </Carousel>
        <Card.Body></Card.Body>
      </Card>
      <InputGroup className="mb-5 w-25 mx-auto">
        <InputGroup.Text id="inputGroup-sizing-sm" className="inputUsername">
          Username:
        </InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="inputGroup-sizing-sm"
          className="GameBoyFont"
          onChange={handleChangeUsername}
        />
      </InputGroup>
      <NavLink to="/pokemons" onClick={handleClick}>
        <Button variant="primary" onClick={createUser} disabled={!username}>
          Sign up
        </Button>
      </NavLink>
    </div>
  );
}
