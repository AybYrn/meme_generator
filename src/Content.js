import React from "react";
import Image from "./image.svg";


export default function Content () {
    return(
        <div className="content--container">
            <div><img src={Image} alt=""></img></div>
        </div>
    );
}