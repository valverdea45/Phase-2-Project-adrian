import React from "react";
import Pokemon from "./Pokemon";

function Home({ allData }) {

    const individualPokemon = allData.map((singlePokemon) => {
        return <Pokemon singlePokemon={singlePokemon} />
    })

    return (
        <div>
            {individualPokemon}
        </div>
    )
}

export default Home