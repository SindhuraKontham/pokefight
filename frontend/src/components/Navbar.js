import { Button, Container, Nav, Navbar as NavBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Pokeball from "./images/pokeball.png";
import "./navbar.css";
import PokeBall from "./Pokeball";
import { useState } from "react"
import { Offcanvas } from "react-bootstrap";


export default function Navbar({ cartQuantity, openCart, closeCart, isOpen }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <NavBs bg="" variant="dark" sticky="top" className="shadow-sm mb-3 nav">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink} className="text">
            Home
          </Nav.Link>
          <Nav.Link to={"/pokemons"} as={NavLink} className="text">
            Pokemons List
          </Nav.Link>
          <Nav.Link to={"/cart"} as={NavLink} className="text">
            Yours Pokemons
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
            </div> )}
         
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    </NavBs>
  );
}
