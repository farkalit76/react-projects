import React from "react"

//JSX
export default function AppNavbar(props) {

    return (
        <nav className={props.darkMode ? "dark" : ""} >
            <img src="./images/react-logo.png"  className="nav-logo" />
            <h3 className="nav-logo-text">React Facts</h3> 
            <div className="toggler">
                <p>Light</p>
                <div className="toggler-slider" onClick={props.toggleMode}>
                    <div className="toggler-slider-circle">?</div>
                </div>
                <p>Dark</p>
            </div>
        </nav>
    )
}