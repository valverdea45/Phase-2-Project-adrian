import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function Navbar() {
    return (
        <div>
            <NavLink to="/CaughtPokemon" exact style={linkStyles} activeStyle={{ background: "darkblue" }}>
                Caught Pokemon
            </NavLink>
        </div>
    )
}

export default Navbar