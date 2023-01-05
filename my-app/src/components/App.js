import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";

function App() {

  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
    .then((data) => data.json())
    .then((alltoys) => setAllData(alltoys))
  }, [])

  console.log("should have data", allData)

  return (
      <div>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
        <Switch>
          <Route exact path="/CaughtPokemon">
            <CaughtPokemon/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
