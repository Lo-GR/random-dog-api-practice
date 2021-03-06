import '../styles/App.css';
import React, { useState } from 'react'

function App() {
  const [dogs, setDogs] = useState([]);
  const checkFileType = (url) =>{
    if(url.endsWith(".mp4") || url.endsWith(".webm")){
      return true
    }
    return false;
  }
  async function handleGetFox(){
    await fetch("https://random.dog/woof.json", {
        method: "GET",
      })
      .then(response => response.json())
      .then(data => setDogs([...dogs, data.url]))
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <div className="clickHere" onClick={handleGetFox}>
        <p>Click Here for Dogs</p>
      </div>
      <div className="doggos">
        {dogs.map(dog => {
          if(checkFileType(dog)){
            return <video src={dog} width="320" height="240" type="video/mp4" controls className="file"/>
          } else {
            return <img  src={dog} alt="a cute doggo" className="file"/>
          }
          })}
      </div>
    </div>
  );
}

export default App;
