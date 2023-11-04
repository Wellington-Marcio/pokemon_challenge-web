import React from "react";
import {
  ContainerListItem,
  Content,
} from "../../components/Containers/Containers";
import SearchInput from "../../components/Search/Search";
import PokemonCard from "../../components/Card/PokemonCard";
import DataApi from "../../components/Data/DataApi";

export default function HomeScreen() {
  return (
    <>
      <ContainerListItem>
        {/* <SearchInput /> */}
        <h1>Pokemons</h1>
        <Content>
          <h1>CardPokemons</h1>
          <DataApi />
          <PokemonCard />
        </Content>
      </ContainerListItem>
    </>
  );
}
