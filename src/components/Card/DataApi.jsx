import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DataApi() {

  
const Api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const [pokemon, setPokemon] = useState([])

useEffect(() => {
axios.get(Api)
.then((response) => setPokemon(response.data.results))
},[]);
// .catch((error) => {
//   console.log(error)
// })
return (
  <>
    {pokemon.map((item) => (
      <Pokemon  data={item} />
    ))}
  </>
    );
}

// const Pokemon = ()  => {
//   return (
//     <>pokemon</>
//   )
// }
const Pokemon = ({data}) => {
  const [details, setDetails] = useState([null]);

  useEffect (() => {
    axios
    .get(data.url)
    .then((response) => setDetails(response.data))
  }, []);

  if (details === null) {
    return <div>Loading pokemon...</div>
  };

  return <> 
    <img src={details.sprites.front_default}/>
     <span><h4>{details.name}</h4>-</span>

   
    {/* <span>Heitgh: {details.height} -</span>
   <span>Weight: {details.weight} -</span> */}

     

    
    
  
    
    
    </>

}
