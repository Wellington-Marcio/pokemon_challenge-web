import React from 'react'
import logo from '../../assets/img/logo.png'
import { Button } from '../Buttons/Button'
import { ContainerNavbar } from '../Containers/Containers'
import { useNavigate, useLocation} from 'react-router-dom'




export default function Navbar() {
  const navigate = useNavigate();
  const getUrl = useLocation();
  //console.log(getUrl)

  const isLandScreen = getUrl.pathname === "/"
  const isHomeScreen = getUrl.pathname === "/home"
  return (
    <>
    <ContainerNavbar>
      
          <img src={logo} alt="logo" width="150" height="55" />
    
        <Button onClick={function () {
                navigate("/home")
              }}>
                {isLandScreen ? "Go!" : ""}
                {isHomeScreen ? "Back" : ""}

              </Button>
        
       
      
   </ContainerNavbar> 
        
        
    </>
  )
}
