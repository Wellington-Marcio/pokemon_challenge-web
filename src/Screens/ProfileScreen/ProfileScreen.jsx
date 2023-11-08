import React from 'react'
import { Container, ContainerImg } from './style'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function ProfileScreen() {
  const {id }= useParams();  

  const[dataPokemon, setDataPokemon] = useState([])

  const Api = "https://pokeapi.co/api/v2/pokemon/${id}";
  useEffect(() => {
    axios.get(Api)
    .then((response) => setDataPokemon(response.data.results));
  }, []);



  return (

   <Container>
    <ContainerImg>
    <div>{dataPokemon.name}</div>
 
 </ContainerImg>
 
</Container>
  )
  
  
  
}
