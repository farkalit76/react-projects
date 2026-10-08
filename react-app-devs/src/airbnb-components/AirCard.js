import React from "react";

export default function AirCard(props){

    console.log(props);

    return (
        <div className="contact-card">
            { props.openSpots === 0  &&  <div className="card-badge">SOLD OUT</div>}
            <img src={`./images/${props.image}`} alt="Katie zafer"  className="card-image"/>
            <div className="card-stats">
                <img src="./images/star.png" className="card-star"/>
                <span>{props.rating}</span>
                <span>({props.reviewCount}) .  </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
        </div>
    )
}