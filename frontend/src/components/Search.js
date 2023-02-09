
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import axios from "axios";
// import PokemonInfo from "./PokemonInfo";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Button,
  Col,
  Row,
} from "react-bootstrap";
// import { pokemons, setSearchResults } from "../App";

export default function Search({
  handleSubmit,
  setQuery,
  pokemonsInfo,
  setPokemonsInfo

}) {

  // const getSortInfo = pokemonsInfo.map(async (obj) => {
  //   const pokInf = await axios.get(obj.url).then((res) => {
  //     const pokemon = res.data;
  //     setPokemonsInfo((pok) => {
  //       pok = [...pokemonsInfo, res.data]
  //       pok.sort((a, b) => {
  //         return (a.name > b.name ? 1 : -1)
  //       })
  //     })
  //    });
  // })

  const sortByName = () => {

  }

  const sortByType = () => {

  }

  //  const sortById = (getSortInfo) => {
  //   const sortedData = [...pokemonsInfo].sort((a, b) => {
  //     return (a.id > b.id ? 1 : -1);
  //   });
  //   setPokemonsInfo(sortedData);
  // }
  // console.log(sortById);

  // const sortByName = () => {
  //   const sortedData = [...pokemonsInfo].sort((a, b) => {
  //     return (a.name > b.name ? 1 : -1);
  //   });
  //   setPokemonsInfo(sortedData);
  // }
  // console.log(sortByName);

  return (
    <Row>
      <Col>
        <form className="input_form" onSubmit={handleSubmit}>
          <input
            className="search_input"
            placeholder="Search Pokemon..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />

          <button className="search_button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </Col>
      <Col>
        <Dropdown className="sort" as={ButtonGroup}>
          <Button variant="warning">Sort by...</Button>

          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

          <Dropdown.Menu className="sort btn" >
            <Dropdown.Item onClick={sortByName}>Name</Dropdown.Item>
            <Dropdown.Item onClick={sortByType}>Types</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}



  // useEffect(async () => {
  //   setLoading(true);
  //   await axios
  //     .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  //     .then((response) => {
  //       const res = response.data.results;
  //       res.map(async(item) => {
  //         const results = await axios.get(item.url);
  //         const result = results.data
  //         console.log(result)
  //         setPokemonsInfo(result);
  //         setLoading(false);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



    // useEffect(async () => {
  //   setLoading(true);
  //   await axios
  //     .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  //     .then((response) => {
  //       const res = response.data.results;
  //       res.map(async(item) => {
  //         const results = await axios.get(item.url);
  //         const result = results.data
  //         console.log(result)
  //         setPokemonsInfo((state) => {
  //           state = [...pokemonsInfo, result];
  //           state.sort((a, b) => a.name > b.name ? 1 : -1 )
  //           return state;
  //         });
  //         setLoading(false);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);