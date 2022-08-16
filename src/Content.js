import React from "react";

export default function Content() {
  const [allMemeImg, setAllMemeImg] = React.useState([]);
  const [meme, setMeme] = React.useState({
    upperText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
    lowerText: "",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImg(data.data.memes));
  }, []);

  function getMemeImg() {
    const randNum = Math.floor(Math.random() * allMemeImg.length);
    const url = allMemeImg[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      randImgurl: url,
    }));
  }

  function handleInputChange(event) {
    const target = event.target;
    console.log("target : " + target.name + "\nvalue : " + target.value);
    setMeme((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  }
  // console.log(meme);

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
        <h3 className="upper--text">{meme.upperText.toUpperCase()}</h3>
        <h3 className="lower--text">{meme.lowerText.toUpperCase()}</h3>
      </div>
    </div>
  );
}
