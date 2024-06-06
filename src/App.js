import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './assets/styles/main.scss';
import EntertainmentVending from './pages/EntertainmentVending';
import FoodService from './pages/FoodService';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/entertainment-vending" element={<EntertainmentVending />} />
        <Route path="/food-service" element={<FoodService />} />
      </Routes>
    </Router>
  );
}

export default App;
