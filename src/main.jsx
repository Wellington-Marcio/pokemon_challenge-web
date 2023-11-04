import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandScreen from './Screens/LandScreen/LandScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import DashScreen from './Screens/DashScreen/DashScreen';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <LandScreen /> },
      { path: "/home", element: <HomeScreen /> },
      { path: "/dash", element: <DashScreen /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
