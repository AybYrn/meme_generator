import React from "react";

export default function Content(props) {
  const [allMemeImg, setAllMemeImg] = React.useState(props);
  const [meme, setMeme] = React.useState({
    upperText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
    lowerText: "",
  });

  React.useEffect(function(){
    
  })

  function getMemeImg() {
    const memesArray = allMemeImg.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      randImgurl: url,
    }));
  }

  function handleInputChange(event) {
    const target = event.target;
    console.log("target :" + target.name + " value : " + target.value)
    setMeme((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  }
  console.log(meme);

  return (
    <div className="content--container">
      <div className="input--container">
        <input
          type="text"
          name="upperText"
          value={meme.upperText}
          placeholder="Upper Text"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="lowerText"
          value={meme.lowerText}
          placeholder="Bottom Text"
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <button onClick={getMemeImg}>Get a new meme image</button>
      </div>
      <div className="img--container">
        <div>
          <img src={meme.randImgurl} alt="" className="meme--image"></img>
        </div>
        <div className="upper--text">{meme.upperText.toUpperCase()}</div>
        <div className="lower--text">{meme.lowerText.toUpperCase()}</div>
      </div>
    </div>
  );
}
