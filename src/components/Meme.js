import React from 'react';
// import memeData from '../memeData.js';

function Meme(){
    
    const [meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/43a45p.png"
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        // make api fetch request
        fetch("https://api.imgflip.com/get_memes")
          .then(resp => resp.json())
          .then( data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevState => ({
            ...prevState, 
            randomImage: url,
        }))
    }

    function handleChange(event){
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }
        ))
    }

    return(
        <main>
        <div className="form">
                <input 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    placeholder="Top text" 
                    className="form--input"
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    placeholder="Bottom text" 
                    className="form--input"
                    onChange={handleChange}
                />
              
              <button 
                  className="form--button"
                  onClick={getMemeImage}
              >
                  Get a new meme image 🖼
              </button>
        </div>
            <img src={meme.randomImage} alt="" className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}

export default Meme;