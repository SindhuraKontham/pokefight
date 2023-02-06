import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./pokemoninfo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import usePagination from "./Pagination";
import PokemonList from "./PokemonList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});



function PokemonInfo({ cart, setCart }) {
  const [pokemonsInfo, setPokemonsInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")
      .then((response) => {

        setPokemonsInfo(response.data.results);
        // setQuery(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = pokemonsInfo.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(pokemonsInfo.length / recordsPerPage);
  const _DATA = usePagination(pokemonsInfo, recordsPerPage);
  const handleChange = (e, p) => {
    setCurrentPage(p);
    _DATA.jump(p);
  };

  console.log(currentRecords)

  return (
    <div className="body">
      {/* <div className="cart">
        <Link to="/cart">
          <img
            className="pokeball"
            src={Ball}
            alt="pokeball"
            width={70}
            height={70}
          ></img>
        </Link>
      </div> */}
      <Container>
        <Row>
        <Stack spacing={2}>
            <Pagination sx={{ color: purple[500] }}
            className="pagination"
              count={nPages}
              onChange={handleChange}
              // variant="outlined"
              // shape="rounded"
              // color="primary"
            />
          </Stack>
          {loading ? (
            <div className="loading-message">
              <img
                src="https://retchhh.files.wordpress.com/2015/03/loading4.gif"
                alt="loading-image"
                style={{ height: "100px" }}
              />
            </div>
          ) : (
            <PokemonList
              pokemonsInfo={currentRecords}
              cart={cart}
              setCart={setCart}
            />
          )}

          {/* <Pagination
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/> */}

      
          {/* <Col sm={2}>
          <img src={ProfilePic1}/>
      </Col> */}
        </Row>
      </Container>

    </div>
  );
}

export default PokemonInfo;
