import React from "react"

import {BrowserRouter} from "react-router-dom"

import "./style-resume.css";
import Main from "./components/resume-pages/Main";
import Navbar from "./components/resume-pages/Navbar";


// JSX
export default function WebAppResume(){

    const[darkMode, setDarkMode] = React.useState(false)

    function toggleMode(){
        setDarkMode( prevMode => !prevMode)
    }

    return (
        <BrowserRouter>

            <Navbar darkMode={darkMode} toggleMode={toggleMode} />
            <Main darkMode={darkMode} toggleMode={toggleMode} />

        </BrowserRouter>
    )
}