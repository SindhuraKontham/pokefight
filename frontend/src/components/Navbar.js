import { Button, Container, Nav, Navbar as NavBs, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Pokeball from "./images/pokeball.png";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Ball from "./icons/pokemonball.png";

export default function Navbar({ cartQuantity}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = useState("")

  return (
    <NavBs bg="" variant="dark" sticky="top" className="shadow-sm mb-3 nav">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink} className="text">
            Home
          </Nav.Link>
          <Nav.Link to={"/pokemons"} as={NavLink} className="text">
            List
          </Nav.Link>
          <Nav.Link to={"/cart"} as={NavLink} className="text">
            Cart
          </Nav.Link>
        </Nav>

        <Link to="/cart">
        <Button
          style={{ position: "relative" }}
          variant=""
        >
          <img
          src={Ball}
            // src={Pokeball}
            alt="Pokeball"
            style={{ width: "4rem", height: "4rem" }}
          />
          {cartQuantity > 0 && (
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center pokeball">
              {cartQuantity}
            </div>
          )}
        </Button>
        </Link>
      </Container>
    </NavBs>
  );
}
