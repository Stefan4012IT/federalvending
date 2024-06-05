import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './assets/styles/main.scss';
import EntertainmentVending from './pages/EntertainmentVending';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/federalvending" element={<Home />} />
        <Route path="/entertainment-vending" element={<EntertainmentVending />} />
      </Routes>
    </Router>
  );
}

export default App;
