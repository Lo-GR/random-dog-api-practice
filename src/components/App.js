import '../styles/App.css';
import React, { useState } from 'react'

function App() {
  const [foxes, setFoxes] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="clickHere">
          <p>Click Here for Foxes</p>
        </div>
        {foxes.map(fox => <img  src={fox} alt="a cute fox"/>)}
      </header>
    </div>
  );
}

export default App;
