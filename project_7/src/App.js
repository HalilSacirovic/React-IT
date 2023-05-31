import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from "./Home";
import PostDetails from './components/PostDetails';

 const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/details' element = {<PostDetails/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}


export default App