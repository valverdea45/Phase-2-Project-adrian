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
        } else {
            return (
                <p>Dang it escaped!</p>
            )
        }
        
    }

    // const randomArray = [
    //     {
    //         id: 1,
    //         name: "Adrian",
    //         power: "coding"
    //     },
    //     {
    //         id: 2,
    //         name: "Daniel",
    //         power: "science"
    //     },
    //     {
    //         id: 3,
    //         name: "Valerie",
    //         power: "Communication"
    //     }
    // ]

    // console.log(randomArray)
    // console.log(randomArray.shift(1))

    function onCatch(randomPokemon) {
        randomPokemon.caught = true
        setCaughtPokemon([...caughtPokemon, randomPokemon])
        const updatedArray = uncaughtPokemon.filter((pokemon) => pokemon.id !== randomPokemon.id);
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