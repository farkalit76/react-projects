import React from "react"

import travelData from "./travel-components/travelData";
import TravelNavebar from "./travel-components/TravelNavbar";
import TravelCards from "./travel-components/TravelCards";

import "./style-travel.css";



// JSX
export default function AppTravel(){

    console.log(travelData);
    const cards = travelData.map( (item) => {
        return <TravelCards
                    key={item.id}
                    item={item}
                />;
    })

    return (
        <div>
            <TravelNavebar/>
            <div className="travel-cards"> 
                {cards}
            </div>
           
        </div>
    )
}