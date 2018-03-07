import React from 'react';


function Header(){
    return(
        <div>
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            <div className="main-nav-div">    
                <ul className="nav-bar">
                    <li>Home</li>
                    <li>Feed</li>
                    <li>Saved</li>
                    <li>About</li>
                </ul>
            </div>
                </header>
      </div>
    )
}

export default Header;