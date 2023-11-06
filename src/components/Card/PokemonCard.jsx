import React from "react";
import {
    Card,
  ContainerCard,
  ContainerImg,
  ContainerInfo,
  Img,

} from "./style";
import DataApi from "./DataApi";

const PokemonCard = () => {
  return (
    <Card>
    <ContainerCard>
      <DataApi />
      <ContainerInfo>
        {/* <h2>Nome passado via props</h2>
        <p>Attack</p>
        <p>Defense</p>
        <button>tipo1</button>
        <button>tipo2</button> */}
      </ContainerInfo>
      <ContainerImg>
        <Img src="{image}" alt="{name}" />
      </ContainerImg>
    </ContainerCard>
    </Card>
  );
};

export default PokemonCard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function PokemonCard() {
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
  
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//       .then((response) => {
//         setPokemon(response.data);
//       });
//   }, []);

//   return (
//     <>
//       {pokemon ? (
    
//         <div>
//           <h2>{pokemon.name}</h2>
//           <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//           <p>Height: {pokemon.height} decimetres</p>
//           <p>Weight: {pokemon.weight} hectograms</p>
//         </div>
//       ) : (
//         <p>Carregando...</p>
//       )}

    
    
      
    


// </>
  
//   );
//       }
// export default PokemonCard;
