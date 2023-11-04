import React from "react";
import {
    Card,
  ContainerCard,
  ContainerImg,
  ContainerInfo,
  Img,

} from "./style";

const PokemonCard = () => {
  return (
    <Card>
    <ContainerCard>
      
      <ContainerInfo>
        <h2>Nome passado via props</h2>
        <p>Attack</p>
        <p>Defense</p>
        <button>tipo1</button>
        <button>tipo2</button>
      </ContainerInfo>
      <ContainerImg>
        <Img src="{image}" alt="{name}" />
      </ContainerImg>
    </ContainerCard>
    </Card>
  );
};

export default PokemonCard;
