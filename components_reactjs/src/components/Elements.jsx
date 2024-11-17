import React from "react";
import Blocks from "./Blocks";
import './Elements.css'

const Elements = (name)=>{
    console.log(name);
    return<>
    <div className="elements">
    <Blocks name="women's" />
    <Blocks name="men's" />
    <Blocks name="accessories" />
    <Blocks name="footwear" />
    </div>
    </>
}

export default Elements;