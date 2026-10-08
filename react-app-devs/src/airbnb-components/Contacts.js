import React from "react";

export default function Contacts(props){

    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.image} className="card-image" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <span>{props.phone}</span>
            </div>
             <div className="info-group">
                <img src="./images/mail-icon.jpg" />
                <span>{props.email}</span>
            </div>
        </div>
    )
}