import React from "react";

export default function AirCardObject(props){

    console.log("props:"+props.item.image);

    let badgeText;
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.item.location == "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="contact-card">
            {badgeText  &&  <div className="card-badge">{badgeText}</div>}
            <img src={`./images/${props.item.image}`} alt="name"  className="card-image"/>
            <div className="card-stats">
                <img src="./images/star.png" className="card-star"/>
                <span>{props.item.rating}</span>
                <span>({props.item.reviewCount}) .  </span>
                <span>{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p>From ${props.item.price} / person</p>
        </div>
    )
}