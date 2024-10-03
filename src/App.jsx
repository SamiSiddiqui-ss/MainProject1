// import React from 'react';
import Header from './Components/Header';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
// import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page4 from './Components/Page4';
import Footer from './Components/Footer';
import HeaderBody from './Components/HeaderBody';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><HeaderBody/><Footer/></>,
    },
    {
      path: "/Page2",
      element: <><Page2 /></>,
    },
    {
      path: "/Page3",
      element:<><Page3 /></>,
    },
    {
      path: "/Page4",
      element: <Page4 />,
    },
  ]);

  return (
    <> 
         <RouterProvider router={router} />
    </>
  );
}

export default App;