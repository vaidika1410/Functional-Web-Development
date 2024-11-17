import React from "react";
import './Blocks.css';

function Blocks(props){
    console.log(props.name)
    return <>
        <div>
            <div className="block">
                <div className="tagname">{props.name}</div>
            </div>
            
        </div>
    </>
}

export default Blocks;