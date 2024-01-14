import React from 'react';
import './App.css';
import Home from './components/home/home.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>


      {
        //<Navbar/>
      }
    </>

  )
}

export default App
