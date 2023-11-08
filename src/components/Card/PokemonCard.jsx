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
import { useNavigate } from "react-router-dom";






export default function PokemonCard() {
  

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
  // const navigate = useNavigate();
  return (


    <>
      <Card >
        <ContainerInfo>
  
          <h4>{details.name}</h4>
          <p>Id: {details.id}</p>
          <h5>Experience: {details.base_experience}</h5>
          <p>Types: {details.types[0].type.name}</p>
          

        </ContainerInfo>

        <ContainerImg>
          <img src={details.sprites.front_default} onClick={()=> navigate("/profile")}/>
        </ContainerImg>
      </Card>
    </>
  );
};
