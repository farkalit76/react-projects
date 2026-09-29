import React from "react"

import Contacts from "./airbnb-components/Contacts";

import "./style-airbnb.css";

// JSX
export default function AppAir(){
    return (
        <div className="contact-cards">
            <Contacts 
                image = "./images/air-bnb.png"
                name = "Mr Xyz LMN1"
                phone = "+91-9900-123456"
                email = "xyz-lmn1@gmail.com"
            />
            <Contacts
                image = "./images/air-bnb.png"
                name = "Mr Xyz LMN2"
                phone = "+91-9900-123456"
                email = "xyz-lmn2@gmail.com"
            />
            <Contacts
                image = "./images/air-bnb.png"
                name = "Mr Xyz LMN3"
                phone = "+91-9900-123456"
                email = "xyz-lmn3@gmail.com"
            /> 
            <Contacts
                image = "./images/air-bnb.png"
                name = "Mr Xyz LMN4"
                phone = "+91-9900-123456"
                email = "xyz-lmn4@gmail.com"
            />
        </div>
    )
}