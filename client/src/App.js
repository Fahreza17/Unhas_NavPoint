import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cards from './pages/card/Cards';
import CardDetails from './pages/card/CardDetails';
import About from './pages/about/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/cards" element = {<Cards/>} />
        <Route path="/CardDetails/:fakultasId" element={<CardDetails />} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </Router>
  );
};

export default App;