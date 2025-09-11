import React from 'react';
import './App.css';
import Header from './com/Header';
import { Routes, Route } from 'react-router-dom'; // ✅
import Home from './Home/Home';
import Drink from './Menu/Drink';
import Snacks from './Menu/Snacks';
import Food from './Menu/Food';
import Foot from './com/Foot';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/food" element={<Food />} /> 
        <Route path="/drink" element={<Drink />} />
        <Route path="/snacks" element={<Snacks />} />
      </Routes>
      <Foot/>      
    </div>
  );
}

export default App;

