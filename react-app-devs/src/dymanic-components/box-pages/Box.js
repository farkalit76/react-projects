import React from "react";

export default function Box(props){

    console.log("Box is rendered :"+props.id)

    //const [off, setOff] = React.useState(props.switch);


    // function toggleSwitch(){
    //     console.log("handleToggle called:")
    //     setOff( prevOff => !prevOff )
    // }

    // function toggleSwitch(){
    //     console.log("handleToggle called:")
    //     setOff( prevOff => { 
    //         return !prevOff
    //     })
    // }

    const styles ={
        backgroundColor : props.switch ? "blue" : "#cccccc"
    }


    return (
        <div style={styles} className="box" key={props.id} onClick={() => props.handleClick(props.id)}></div>
    )
}