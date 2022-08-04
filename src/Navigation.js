import React from "react";
import Meme from "./meme.svg";


export default function Navigation () {
    return(
        <div className="navigation--bar">
            <div><img src={Meme} alt=""></img></div>
            <p>Meme Generator</p>
        </div>
    );
}