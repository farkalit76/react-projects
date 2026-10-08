import React from "react";

export default function Star(props){

    let startIcon = props.isFilled ? "star.png" : "star-empty.png" ;
    return (
          <img 
            src={`./images/${startIcon}`} alt="star" 
            className="article-star"
            onClick={props.handleClick} />
    )
}
