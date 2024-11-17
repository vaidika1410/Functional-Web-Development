import React from "react";
import './Card.css'

function Card(props) {
    return <>
        <div className="card">
            <img src={props.profile_photo} alt="" />
            <h1>{props.username}</h1>
            <h2>{props.age}</h2>
            <h2>{props.city}</h2>
            <button>add friend</button>
        </div>
    </>
}    

export default Card;