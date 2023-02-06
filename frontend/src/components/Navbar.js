import { Button, Container, Nav, Navbar as NavBs, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Pokeball from "./images/pokeball.png";
import "./navbar.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
// import CartItem from "./CartItem"

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

        <Button
          onClick={handleShow}
          style={{ position: "relative" }}
          variant=""
        >
          <img
            src={Pokeball}
            alt="Pokeball"
            style={{ width: "4rem", height: "4rem" }}
          />
          {cartQuantity > 0 && (
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center pokeball">
              {cartQuantity}
            </div>
          )}
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Pokemon Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              {/* {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))} */}

            </Stack>
            pokemons here
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavBs>
  );
}
