import React from "react"

import {Routes, Route} from "react-router-dom"

import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


// JSX
export default function Main(props){

    return (
           
            <main className={props.darkMode ? "dark" : ""} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
    )
}