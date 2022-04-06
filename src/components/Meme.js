import React from 'react';
import memeData from '../memeData.js';

function Meme(){

    const [memeImage, setMemeImage] = React.useState("")

    function handleClick(){
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        console.log(randomNumber)
        const url = memeArray[randomNumber].url
        setMemeImage(url)

        // we can also use object destructuring to get the url property from the memeArray
        // const {url} = memeArray[randomNumber]
    }

    return(
        <main>
        <div className="form">
                <input 
                    type="text"
                    placeholder="Top text" 
                    className="form--input"
                />

                <input 
                    type="text"
                    placeholder="Bottom text" 
                    className="form--input"
                />
              
              <button 
                  className="form--button"
                  onClick={handleClick}
              >
                  Get a new meme image 🖼
              </button>
        </div>
            <img src={memeImage} alt="" className="meme--image"/>
        </main>
    )
}

export default Meme;