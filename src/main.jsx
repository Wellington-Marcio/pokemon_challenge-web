import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandScreen from './Screens/LandScreen/LandScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <LandScreen /> },
      { path: "/home/", element: <HomeScreen /> },
      { path: "/profile/:id", element: <ProfileScreen/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
