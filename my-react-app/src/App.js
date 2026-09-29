import React from "react"

import AppHeader from "./app-components/AppHeader";
import AppFooter from "./app-components/AppFooter";
import AppMain from "./app-components/AppMain";

import "./style.css";

// JSX
export default function App(){
    return (
        <div>
            <AppHeader/>
            <AppMain/>
            <AppFooter/>
        </div>
    )
}