import React from "react";
import { ContainerListItem, Content } from "./style";
import SearchInput from "../../components/Search/Search";
import PokemonCard from "../../components/Card/PokemonCard";
// import DataApi from "../../components/Card/DataApi";


export default function HomeScreen() {
  return (
    <>


      <ContainerListItem>
        <h1>Pokemons  choose your favorite</h1>  
        <SearchInput />
        <Content>
          
          
          <PokemonCard />
        </Content>
      </ContainerListItem> 
    </>
  );
}
