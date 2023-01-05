import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
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
            <NavLink to="/Home"exact style={linkStyles} activeStyle={{ background: "darkblue" }}>
                Uncaught Pokemon
            </NavLink>
            <NavLink >
                Wild Pokemon
            </NavLink>
        </div>
    )
}

export default Navbar