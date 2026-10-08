import React from "react";


export default function MyJoke(props){

    const[isShown, setIsShown] = React.useState(props.isShown);


    function toggleShown(){
        //console.log("show punchline:")
        setIsShown(prevShown => !prevShown)
    }

 
    return (
        <div key={props.jokeId}>
            <h3>Setup : {props.setup}</h3>
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick = {toggleShown} >{isShown ? "Hide" : "Show"} Punchline</button>
        </div>
    )
}