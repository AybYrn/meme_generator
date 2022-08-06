import React from "react";

export default function Content(props) {
  const [allMemeImg, setAllMemeImg] = React.useState(props);
  const [meme, setMeme] = React.useState({
    upperText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
    lowerText: "",
  });

  function getMemeImg() {
    const memesArray = allMemeImg.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      randImgurl: url,
    }));
  }

  const saveInputUpp = evt => {
    setMeme((prevState) => {
      return { ...prevState, upperText: evt.target.value };
    });
    console.log('value is:', evt.target.value);
  }

  const saveInputLow = evt => {
    setMeme((prevState) => {
      return { ...prevState, lowerText: evt.target.value };
    });
    console.log('value is:', evt.target.value);
  }
  console.log(meme);

    

  return (
    <div className="content--container">
      <div className="input--container">
        <input
          type="text"
          value={meme.upperText}
          placeholder="Upper Text"
          onChange={saveInputUpp}
        >
          {/* {meme.upperText} */}
        </input>
        <input
          type="text"
          value={meme.lowerText}
          placeholder="Bottom Text"
          onChange={saveInputLow}
        >
          {/* {meme.lowerText} */}
        </input>
      </div>
      <div>
        <button onClick={getMemeImg}>Get a new meme image</button>
      </div>
      <div>
        <img src={meme.randImgurl} alt="" className="meme--image"></img>
      </div>
    </div>
  );
}
