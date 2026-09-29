import React from "react"

//JSX
export default function AppHeader() {
    return (
         <header>
            <nav className="nav">
                <img src="./images/react-logo.png"  className="nav-logo" /> 
                <ul className="nav-items">
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>   
            </nav>
        </header>
    )
}