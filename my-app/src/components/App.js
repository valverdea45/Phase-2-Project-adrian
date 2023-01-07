import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";
import UncaughtPokemon from "./UncaughtPokemon"
import WildPokemon from "./WildPokemon";
import Home from "./Home";
import AddPokemon from "./AddPokemon"

function App() {

  const [uncaughtPokemon, setUncaughtPokemon] = useState([])
  const [caughtPokemon, setCaughtPokemon] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
    .then((data) => data.json())
    .then((allPokemon) => organizingPokemon(allPokemon))
  }, [])

  function organizingPokemon(allPokemon) {
    setCaughtPokemon(allPokemon.filter(individualPokemon => individualPokemon.caught === true))
    setUncaughtPokemon(allPokemon.filter(individualPokemon => individualPokemon.caught === false))
  }
  // const caughttPokemon = allData.filter(individualPokemon => individualPokemon.caught === true)

  // const uncaughttPokemon = allData.filter(individualPokemon => individualPokemon.caught === false)

  // setCaughtPokemon(caughttPokemon)
  // setUncaughtPokemon(uncaughttPokemon)

  console.log("this is uncaught", uncaughtPokemon)
  console.log("this is caught", caughtPokemon)

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
            <CaughtPokemon caughtPokemon={caughtPokemon}/>
          </Route>
          <Route exact path="/UncaughtPokemon">
            <UncaughtPokemon uncaughtPokemon={uncaughtPokemon}/>
          </Route>
          <Route exact path="/WildPokemon">
            <WildPokemon setUncaughtPokemon={setUncaughtPokemon} uncaughtPokemon={uncaughtPokemon} setCaughtPokemon={setCaughtPokemon} caughtPokemon={caughtPokemon}/>
          </Route>
          <Route exact path="/AddPokemon">
            <AddPokemon uncaughtPokemon={uncaughtPokemon} setUncaughtPokemon={setUncaughtPokemon} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
