import React from 'react'

export default function DataApi() {
  const Api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  async function getPokemon() {
    const response = await fetch(Api)
    const data = await response.json()
    console.log(data)
  }

    
  return (
    <>
    <button onClick={getPokemon}>Get Pokemon</button>

    
    </>
  )
}
