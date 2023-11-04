import React from 'react'
import { ContainerImg, ContainerLand, ContainerInfo } from '../../components/Containers/Containers'
import Banner from '../../assets/Img/Banner.png'
import { ButtonGo } from '../../components/Buttons/Button'


export default function LandScreen() {
  return (
    <ContainerLand>
      <ContainerImg>
        <img src={Banner} alt="banner" />
      </ContainerImg>
      <ContainerInfo>
        <h1>Find all your favorite Pokemon</h1>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
      <ButtonGo>Set Pokémons</ButtonGo>
  </ContainerInfo>
    </ContainerLand>
  )
}
