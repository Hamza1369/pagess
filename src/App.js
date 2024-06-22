import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import SecondPage from './components/secondPage';
// import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>

    </div>
  );
}

export default App;
