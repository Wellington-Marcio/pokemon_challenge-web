import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DataApi(props) {

  
const Api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const [pokemon, setPokemon] = useState([])

useEffect(() => {
axios.get(Api)
.then((response) => console.log(response.data.results))
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
const Pokemon = ({data}) => {
  const [details, setDetails] = useState([null]);
  useEffects (() => {
    axios.get(data.url)
    .then((response) => setDetails(response.data))
    //  .catch((error) => {
    //   console.log(error)
    // })
  }, []);
  if (details === null) {
    return <div>Loading pokemon...</div>
  }
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  )
}
