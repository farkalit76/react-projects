import React from "react"

import Header from "./dymanic-components/meme-pages/Header";
import Meme from "./dymanic-components/meme-pages/Meme";

import "./style-web.css";


// JSX
export default function WebAppMeme(){
    return (
        <div>
            <Header/>
            <Meme />
        </div>
    )
}