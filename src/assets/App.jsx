import React from 'react'
import Home from './pages/homepage/Home'
import LocomotiveScroll from 'locomotive-scroll';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Texttospeech from './components/functions/texttospeech/Texttospeech';


const router = createBrowserRouter([

 
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/speech",
    element: <Texttospeech/>,
  }

  
 

]);

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App