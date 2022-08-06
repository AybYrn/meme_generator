import React from "react";  

export default function Content(props) {

  const [getImage, setImage] = React.useState("")

  function getMemeImg() {
    const memesArray = props.data.memes
    const randNum = Math.floor(Math.random() * memesArray.length);
    setImage(memesArray[randNum].url)
  }

  return (
    <div className="content--container">
      <div className="input--container">
        <input type="text" placeholder="Upper Text"></input>
        <input type="text" placeholder="Bottom Text"></input>
      </div>
      <div>
        <button onClick={getMemeImg} >Get a new meme image</button>
      </div>
      <div><img src={getImage} alt="" className="meme--image"></img></div>
    </div>
  );
}
