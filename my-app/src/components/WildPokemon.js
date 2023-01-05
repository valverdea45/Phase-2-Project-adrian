import React from "react";

function WildPokemon({ uncaughtPokemon }) {

    function getRandomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }


    const randomPokemon = uncaughtPokemon[getRandomInteger(0, 150)]

    console.log(randomPokemon.name)

    return (
        <div>
            <h2>{`Woah a wild ${randomPokemon.name} appeared!`}</h2>
            <p>{randomPokemon.name}</p>
            <p>{randomPokemon.hp}</p>
            <img src={randomPokemon.sprites.front} />
            <btn>PokeBall</btn>
        </div>
    )
}

export default WildPokemon