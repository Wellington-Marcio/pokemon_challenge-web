import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  // ContainerCard,
  ContainerImg,
  ContainerInfo,
  //ContainerInfo,
  // Img,
} from "./style";

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
      <Card>
        <ContainerInfo>
  
          <h5>{details.name}</h5>
          <p>Id: {details.id}</p>
          <p>Height: {details.height}</p>
          {/* <p>Weight: {details.weight}</p>
          <p>Base experience: {details.base_experience}</p>
          <p>Abilities: {details.abilities[0].ability.name}</p>
          <p>Types: {details.types[0].type.name}</p>
          <p>Stats: {details.stats[0].stat.name}</p>
          <p>Height: {details.height}</p>
           */}

        

        </ContainerInfo>

        <ContainerImg>
          <img src={details.sprites.front_default} />
        </ContainerImg>
      </Card>
    </>
  );
};
