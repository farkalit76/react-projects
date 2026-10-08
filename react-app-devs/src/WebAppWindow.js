import React from "react"


import "./style-web.css";
import WindowTracker from "./dymanic-components/web-pages/WindowTracker";

// JSX
export default function WebAppWindow(){

    const [show, setShow] = React.useState(true)

    function toggleWindow(){
        setShow( prevWin => !prevWin)
    }
    return (
        <div className="container">
            <button onClick={toggleWindow} className="form-button">Toggle WindowTracker</button>
            {show && <WindowTracker/>}
        </div>
    )
}