
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){

    return (
        <nav className={props.darkMode ? "dark" : "navbar"} >
            <div className="nav-container">
    
                <div className="logo">
                   <img src="./images/usmani-01.png" className="image-logo" alt="usman" ></img><span> Usman</span>
                </div>

                <div className="nav-links">
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/dashboard">Dashboard</Link>|{" "}
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="toggler">
                    <p>{props.darkMode ? "🌙" : "☀️"}</p>
                    <div className="toggler-slider" onClick={props.toggleMode} >
                        <div className="toggler-slider-circle">{props.darkMode ? "🌙" : "☀️"}</div>
                    </div>
                </div>

            </div>
        </nav>
    )
}