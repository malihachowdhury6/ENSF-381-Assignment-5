import './App.css';
import React, { useState } from 'react';
import Homepage from './components/Homepage.js';
import Productpage from './components/Productpage.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Import the LoginPage component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
       <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/Products" element={isAuthenticated ? <Productpage /> : <Navigate to="/login" replace />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
