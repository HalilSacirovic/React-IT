import './App.css';
import React, { useState } from 'react';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

import {createBrowserRouter,RouterProvider} from "react-router-dom";



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Blog/>
      ),
    },
    {
      path: "/details",
      element: <BlogDetails/>,
    },
  ]);

  return (
   <RouterProvider router = {router}/>
  );
}

export default App;
