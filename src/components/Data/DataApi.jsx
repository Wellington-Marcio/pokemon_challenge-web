import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DataApi() {

  
const Api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const [pokemon, setPokemon] = useState([])

useEffect(() => {
axios.get(Api)
.then((response) => console.log(response.data.results))
  
  //console.log(response.data)
})
// .catch((error) => {
//   console.log(error)
// })
return (
  <>
    {pokemon.map((item) => (
      <Pokemon  data={item}/>
    ))}
  </>
    );
}
const Pokemon = ({data }) => {
  const [datails, setDatails] = useState([null]);
  useEffects (() => {
    axios.get(data.url)
    .then((response) => setDatails(response.data))
    //  .catch((error) => {
    //   console.log(error)
    // })
  }, []);
  if (datails === null) {
    return <div>Loading pokemon...</div>
  }
  return (
    <div>
      <h1>{datails.name}</h1>
    </div>
  )
}
