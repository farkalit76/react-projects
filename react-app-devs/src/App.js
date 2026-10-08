import React from "react"

import AppNavbar from "./app-components/AppNavbar";
// import AppFooter from "./app-components/AppFooter";
import AppMain from "./app-components/AppMain";

import "./style-dark-light.css";


// JSX
export default function App(){

    const[darkMode, setDarkMode] = React.useState(false)

    function toggleMode(){
        setDarkMode( prevMode => !prevMode)
    }
    return (
        <div className="container">
            <AppNavbar darkMode={darkMode} toggleMode={toggleMode} />
            <AppMain   darkMode={darkMode} toggleMode={toggleMode} />
            {/* <AppFooter/> */}
        </div>
    )
}