import './App.css';
import Townhalls from './components/Thownhalls'
import Card from './components/Card';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Townhalls />} />
          <Route exact path='/th10' element={<Card />} />
          <Route exact path='/th11' element={<Card />} />
          <Route exact path='/th12' element={<Card />} />
          <Route exact path='/th13' element={<Card />} />
          <Route exact path='/th14' element={<Card />} />
          <Route exact path='/th15' element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
