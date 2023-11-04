import React from 'react'
import logo from '../../assets/img/logo.png'
import { Button } from '../Buttons/Button'
import { ContainerNavbar } from '../Containers/Containers'




export default function Navbar() {
  return (
    <>
    <ContainerNavbar>
      
          <img src={logo} alt="logo" width="120" height="50" />
    
        <Button>Go!</Button>
        
       
      
   </ContainerNavbar> 
        
        
    </>
  )
}
