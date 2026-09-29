import React from "react";

import CardHeader from "./card-components/CardHeader";
import CardFooter from "./card-components/CardFooter";
import CardMain from "./card-components/CardMain";


import "./style-card.css";

export default function AppCard(){

    return (
        <div className="container-main">
           <CardHeader/>
           <CardMain/>
           <CardFooter/>
        </div>
    )
}