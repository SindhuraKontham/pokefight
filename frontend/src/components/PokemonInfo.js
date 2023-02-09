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
import Search from "../components/Search"

function PokemonInfo({ pokemonsInfo,setPokemonsInfo,cart, setCart, user }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const pokRef = useRef();
  const [getPokemonsInfo, setGetPokemonsInfo] = useState([]);
 

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setPokemonsInfo(response.data.results);
        // setQuery(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getPokemonInfo = async (response) => {
    response.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setGetPokemonsInfo(result.data)

      //   (state) => {
      //   state = [...state, result.data];
      //   // state.sort((a, b) => a.id > b.id ? 1: -1 )
      //   console.log(state)
      //   return state;
      //  }
    });
  };

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


  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.newItem.value;
    if (!item) {
      return setPokemonsInfo();
    }
    if (item) setPokemonsInfo([...pokemonsInfo, item]);
    e.target.reset();
  };

  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  const sort = (data) => {
    console.log(data)
    return data.sort()
  }

  return (
    <div className="body">
      <Container>
        <Row>
        <Search  data={search(pokemonsInfo)}
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
        pokemonsInfo={pokemonsInfo}
        // setPokemonsInfo={setPokemonsInfo}
        />
        </Row>
        <Row>
        <Stack spacing={2}>
            <Pagination 
            className="pagination"
              count={nPages}
              onChange={handleChange}
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
              user = {user}
              query={query}
            />
          )}
      
          {/* <Col sm={2}>
          <img src={ProfilePic1}/>
      </Col> */}
        </Row>
      </Container>

    </div>
  );
}

export default PokemonInfo;
