import '../styles/App.css';
import React, { useState } from 'react'

function App() {
  const [foxes, setFoxes] = useState([]);

  async function handleGetFox(){
    await fetch("https://aws.random.cat/meow", {
        method: "GET",
      })
      // .catch(err => {
      //   console.log(err)
      // })
    // console.log(foxResponse);
    // const foxData = await foxResponse.json();
    // setFoxes([...foxes, foxData.image])
      .then(response => response.json())
      .then(data => setFoxes([...foxes, data.file]))
      .catch(err => {
        console.log(err)
      })
  }
  const check = () =>{
    console.log(foxes);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="clickHere" onClick={handleGetFox}>
          <p>Click Here for Foxes</p>
        </div>
        <div className="clickHere" onClick={check}>
          <p>check</p>
        </div>
        {foxes.map(fox => <img  src={fox} alt="a cute fox"/>)}
      </header>
    </div>
  );
}

export default App;
