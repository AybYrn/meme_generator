import React from "react";  

let url

export default function Content(props) {
  function getMemeImg() {
    const memesArray = props.data.memes
    const randNum = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randNum].url
    console.log(url)
  }

  return (
    <div className="content--container">
      <div className="input--container">
        <input type="text" placeholder="Upper Text"></input>
        <input type="text" placeholder="Bottom Text"></input>
      </div>
      <div>
        <button onClick={getMemeImg}>Get a new meme image</button>
      </div>
      <img src={url} alt =""></img>
    </div>
  );
}
