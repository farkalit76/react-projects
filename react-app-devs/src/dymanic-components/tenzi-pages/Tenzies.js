
import React from "react";

export default function Tenzies(props) {

    const styles = {
        backgroundColor:  props.isHeld ? "lightgreen" : "white"
    }
   
    return (
        <div className="dice-face" style={styles} onClick={props.holdDice}>
            <h2 className="dice-num" >{props.value}</h2>
        </div>
    )
}