import React from "react";
import './Navbar.css'

function Navbar(props){
    console.log(props)

    return <>
        <nav>
            <h1>Todoroki {props.a}</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    </>
}

export default Navbar;