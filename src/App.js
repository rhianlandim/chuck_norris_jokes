import "./styles.css";
import chuck_norris from "./assets/Chuck Norris.png";
import { GiPistolGun }  from "react-icons/gi";
import { useState } from "react";
import api from "./services/api.js"


function App() {

const [ joke, setJoke ] = useState("")

async function searchJoke () {

  try {
    const response = await api.get()
    setJoke(response.data.value)
  } catch (e) {
    console.log(e)
  }
}

  return (
    <div className="container">
      <div className="wanted">
        <header className="title">
          <h1>WANTED</h1>
          <img src={chuck_norris}/>
          <h2>----- Dead or Alive -----</h2>
          <h1>Chuck Norris</h1>
          <h2>---- $ 1000.000.000 ----</h2>
        </header>
      </div>

        <div className="buttonArea">
          <div className="area">
            Press the button to see a joke.
            <button onClick={searchJoke}>
              <GiPistolGun size={35} color="#000"/>
            </button>
          </div>
          <main className="main">
            <span>{joke}</span>
          </main>
        </div>
    </div>
  );
}

export default App;
