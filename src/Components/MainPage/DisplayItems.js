import React from 'react';


function Items(props){
    return(
        <div className = "display-items">
            <div className="image-div">
                <img src = {props.img} className="image"/>
            </div>
            <div className="info-div">    
                <h1>{props.title}</h1>
                <h4>{props.author}</h4>
                <p>{props.description}</p>
            </div>
            <div className="button-display">
                <button className="save-button">SAVE</button>
                <button className="link">Go To Source</button>
            </div>
        </div>
    )
}
export default Items;