import React from 'react'
import { ContainerImg, ContainerLand } from '../../components/Containers/Containers'
import Banner from '../../assets/Img/Banner.png'


export default function LandScreen() {
  return (
    <ContainerLand>
      <ContainerImg>
        <img src={Banner} alt="banner" />
      </ContainerImg>
  
    </ContainerLand>
  )
}
