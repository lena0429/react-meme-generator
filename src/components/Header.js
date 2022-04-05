import React from 'react';

function Header() {
    return(
        <div className="header">
            <img src="../images/Troll Face.png" alt="troll face" className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--text">Built with React</p>
        </div>
    )

}

export default Header;