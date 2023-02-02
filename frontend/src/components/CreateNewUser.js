import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import ProfilePic1 from "../Images/ProfilePic1.png";
import ProfilePic2 from "../Images/ProfilePic2.png";
import ProfilePic3 from "../Images/ProfilePic3.png";
import ProfilePic4 from "../Images/ProfilePic4.png";
import ProfilePic5 from "../Images/ProfilePic5.png";

export default function CreateNewUser() {
  const [picture, setPicture] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setPicture(selectedIndex);
  };
  // console.log(picture);
  return (
    <div className="text-center mt-5 ">
      <h2>Got it, let's sign you up!</h2>
      <Card.Subtitle>Choose a Profile picture and username</Card.Subtitle>
      <Card className="mx-auto my-5" style={{ width: "18rem" }}>
        <Carousel
          variant="dark"
          style={{ backgroundColor: "none" }}
          activeIndex={picture}
          onSelect={handleSelect}
          indicators={false}
        >
          <Carousel.Item interval={1000000}>
            <img
              src={ProfilePic1}
              className="img-fluid max-height: 100% width: auto"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img
              src={ProfilePic2}
              className="img-fluid max-width: 100% height: auto"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img
              src={ProfilePic3}
              className="img-fluid max-width: 100% height: auto"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img
              src={ProfilePic4}
              className="img-fluid max-width: 100% height: auto"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000000}>
            <img
              src={ProfilePic5}
              className="img-fluid max-width: 100% height: auto"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body></Card.Body>
      </Card>
      <InputGroup className="mb-5 w-25 mx-auto">
        <InputGroup.Text id="inputGroup-sizing-default">
          Username:
        </InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button variant="primary" className="mb-5">
        Submit
      </Button>
    </div>
  );
}
