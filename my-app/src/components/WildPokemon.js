import React from "react"; 

function WildPokemon({ setUncaughtPokemon, uncaughtPokemon, setCaughtPokemon, caughtPokemon }) {

       function getRandomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    const randomPokemon = uncaughtPokemon[getRandomInteger(0, uncaughtPokemon.length - 1)] 

    

    function handleCatch() {
        const chanceToCatch = getRandomInteger(0, 100)
        const pokeball = getRandomInteger(0, 100)
        console.log("chance to catch", chanceToCatch)
        console.log("number rolled", pokeball)
        console.log("was it caught?", pokeball >= chanceToCatch)


        if(pokeball >= chanceToCatch) {
            return onCatch(randomPokemon)
        } 
    }

    function onCatch(randomPokemon) {
        randomPokemon.caught = true

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
            <h2>{`Woah a wild ${randomPokemon.name} appeared!`}</h2>
            <p>{randomPokemon.name}</p>
            <p>{randomPokemon.hp}</p>
            <img src={randomPokemon.sprites.front} alt={""} />
            <br/>
            <btn onClick={handleCatch}>Catch It!</btn>
        </div>
    )
}

export default WildPokemon