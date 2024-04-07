import './App.css';
import React from 'react';
import Homepage from './components/Homepage.js';
import Productpage from './components/Productpage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Import the LoginPage component



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path= "/Login" element = {<Homepage />}/>
      <Route path="/Products" element={<Productpage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
