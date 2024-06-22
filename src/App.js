import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import SecondPage from './components/secondPage';
// import './App.css';


function App() {
  const [data, setData] = useState(null);
  const [selec,setSelec]=useState(0)
  useEffect(() => {
    // Fetch data from the JSON file
    fetch('https://paranoize.otomeserver.com/content.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} setSele={setSelec} />} />
        <Route path="/secondPage" element={<SecondPage imag={ data[selec]} />} />
      </Routes>

    </div>
  );
}

export default App;
