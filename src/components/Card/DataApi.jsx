import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DataApi() {
  const Api = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => setPokemon(response.data.results));
  }, []);

  return (
    <>
      {pokemon.map((item) => (
        <Pokemon data={item} />
      ))}
    </>
  );
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);

  if (details.length === 0) {
    return <p>Loading pokemon...</p>;
  }

  return (
    <>
      <img src={details.sprites.front_default} />
      <span>
        <h4>{details.name}</h4>
      </span>
    </>
  );
};
