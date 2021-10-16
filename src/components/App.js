import '../styles/App.css';
import React, { useState } from 'react'

function App() {
  const [foxes, setFoxes] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        {foxes.map(fox => <img  src={fox} alt="a cute fox"/>)}
      </header>
    </div>
  );
}

export default App;
