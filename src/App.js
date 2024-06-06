import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './assets/styles/main.scss';
import EntertainmentVending from './pages/EntertainmentVending';
import FoodService from './pages/FoodService';
import AboutUs from './pages/AboutUs';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entertainment-vending" element={<EntertainmentVending />} />
        <Route path="/food-service" element={<FoodService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
