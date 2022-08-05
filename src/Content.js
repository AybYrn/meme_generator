import React from "react";

export default function Content() {
    function handleClick(){
        console.log("hi")
    }

    function handleOnMouseOver(){
        
    }
  return (
    <div className="content--container">
      <div className="input--container">
        <input></input>
        <input></input>
      </div>
      <div>
        <button onClick={handleClick}>Get a new meme image</button>
      </div>
      <div>
        <img  alt="" onMouseOver={handleOnMouseOver}></img>
      </div>
    </div>
  );
}
