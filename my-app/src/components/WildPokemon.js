import React, { useState, useEffect } from "react";

function WildPokemon({ setUncaughtPokemon, uncaughtPokemon, setCaughtPokemon, caughtPokemon }) {

    function getRandomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    // created state to change pokemon displayed
    const [pokemonIndex, setPokemonIndex] = useState(0)
    // created a state for each conditional
    const [pokemonCaught, setPokemonCaught] = useState(false)
    const [pokemonRan, setPokemonRan] = useState(false)
    const [showGame, setShowGame] = useState(true)
    const [triedToRun, setTriedToRun] = useState(false)

    useEffect(() => {
      setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))  
    }, [uncaughtPokemon])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPokemonCaught(false)
        }, 1500)
        return () => {
            clearTimeout(timeoutId)
        }
    },[pokemonCaught])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPokemonRan(false)
        }, 1500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [pokemonRan])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowGame(true)
        }, 1700)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [showGame])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
           setTriedToRun(false) 
        }, 1000);
        return () => {
            clearTimeout(timeoutId)
        }
    }, [triedToRun])

    let randomPokemon = uncaughtPokemon[pokemonIndex]


    function handleCatch() {
        const chanceToCatch = getRandomInteger(0, 100)
        const pokeball = getRandomInteger(0, 100)
        
        console.log("was it caught?", pokeball >= chanceToCatch)


        if (pokeball >= chanceToCatch) {
            return onCatch(randomPokemon)
        } else {
            const chanceToRun = getRandomInteger(0, 5)
            console.log("chance to run away", chanceToRun)
            if(chanceToRun >= 2) {
                setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
                setPokemonRan(true)
                setShowGame(false)
                console.log("the Pokemon escaped!")
            } else {
                setTriedToRun(true)
              console.log("The Pokemon could not escape!")  
            }
            
        }
    }

    function onCatch(randomPokemon) {
        randomPokemon.caught = true
        setPokemonCaught(true)
        setShowGame(false)

        fetch(`http://localhost:4000/pokemon/${randomPokemon.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caught: true
            })
        })
            .then((data) => data.json())
            .then((newPokemon) => handleNewPokemon(newPokemon))
    }

    function handleNewPokemon(newPokemon) {
        setCaughtPokemon([...caughtPokemon, newPokemon])
        const updatedArray = uncaughtPokemon.filter((pokemon) => pokemon.id !== newPokemon.id);
        setUncaughtPokemon(updatedArray)
    }

    return (
        <div>
            {showGame ? (
               <div>
            <h2>{`Woah a wild ${randomPokemon.name} appeared!`}</h2>
            <p>{randomPokemon.name}</p>
            <p>{randomPokemon.hp}</p>
            <img src={randomPokemon.sprites.front} alt={""} />
            <br />
            <button onClick={handleCatch}>Catch It!</button>
            </div> 
            ) : null}
            <div>
                {pokemonCaught ? (
                    <h1>You caught the Pokemon!</h1>
                ) : null}
            </div>
            <div>
                {pokemonRan ? (
                    <h1>The wild Pokemon ran away!</h1>
                ) : null}
            </div>
            <div>
                {triedToRun ? (
                    <h1>Pokemon tried to run! but couldn't escape!</h1>
                ) : null}
            </div>
        </div>
    )
}

export default WildPokemon