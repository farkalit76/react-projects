import React from "react";

export default function TravelCards(props){

    console.log("travel: "+props);

    return (
        <div className="travel-card">
            <img src={`./images/${props.item.imageUrl}`} className="travel-image"/>
             <div className="travel-content">
                <h3>Title:{props.item.title}</h3>
                <span>Location: {props.item.location} </span>
                <span>Price : INR {props.item.price} </span>
                <p>{props.item.description} </p>
                <p>Googel Map: {props.item.googleMapsUrl}</p>
                
                <span>Start Date: {props.item.startDate}</span>
                <span>End Date: {props.item.endDate}</span>
            </div>
        </div>
    )
}