import { Button, Container, Nav, Navbar as NavBs} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import Pokeball from "./images/pokeball.png";
import pokeball from "./navbar.css";


export default function Navbar() {
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
          <Nav.Link to={"/cart"} as= {NavLink} className="text">
            Yours Pokemons
          </Nav.Link>
          </Nav>
          <Button style={{position: "relative"}} variant="">
            <img src={Pokeball} alt="Pokeball" style={{width: "4rem", height: "4rem"}} />
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center pokeball">3</div>
          </Button>
      </Container>
    </NavBs>
  );
}
