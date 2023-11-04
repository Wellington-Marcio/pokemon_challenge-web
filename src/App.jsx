import { useState } from 'react'
import DataApi from './components/Data/DataApi'
import LandScreen from './Screens/LandScreen/LandScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import Navbar from './components/Navbar/Navbar'



function App() {
  

  return (
    <>
    <Navbar />

    {/* <DataApi /> */}
    <LandScreen />
    {/* <HomeScreen /> */}
    </>
  )
}

export default App
