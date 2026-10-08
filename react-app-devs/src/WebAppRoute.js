import React from "react"

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import MyHome from "./dymanic-components/route-pages/MyHome";
import MyDashboard from "./dymanic-components/route-pages/MyDashboard";
import AboutMe from "./dymanic-components/route-pages/AboutMe";
import MyContact from "./dymanic-components/route-pages/MyContact";
import MyNavbar from "./dymanic-components/route-pages/MyNavbar";

import "./style-route.css";


// JSX
export default function WebAppRoute(){
    return (
        <BrowserRouter>

            <MyNavbar />

            <main>
                <Routes>
                    <Route path="/" element={<MyHome />} />
                    <Route path="/dashboard" element={<MyDashboard />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<MyContact />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}