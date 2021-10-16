import '../styles/App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [foxes, setFoxes] = useState([]);
  const useGetFoxes = () =>{
    useEffect(() => {
      fetch("https://randomfox.ca/floof")
        .then(response => response.json())
        .then(data => setFoxes([...foxes, data.image]))
    }, [])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="clickHere" onClick={useGetFoxes}>
          <p>Click Here for Foxes</p>
        </div>
        {foxes.map(fox => <img  src={fox} alt="a cute fox"/>)}
      </header>
    </div>
  );
}

export default App;
