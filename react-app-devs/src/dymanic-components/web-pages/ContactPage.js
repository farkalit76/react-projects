import React from "react";

import Star from "./Star";


export default function ContactPage(){

    const [contact, setContact] = React.useState({

        firstName : "Akbar",
        lastName : "Jamal",
        phone : "+91-9900-123777",
        email : "mister.doe76@gmail.com",
        location : "Banglore",
        isFavorite :true
    })

    let startIcon = contact.isFavorite ? "star.png" : "star-empty.png" ;

    function toggleFavorite(){
        console.log("Toggle Favorite: "+contact.isFavorite);
        setContact( prevContact => {
                return {...prevContact,  isFavorite: !prevContact.isFavorite }
        })
    }

    return (
        <main>
            <article className="article">
                <img  src="./images/demo-man.png"  alt="name" className="article-image"/>
                <div>
                    <Star isFilled={contact.isFavorite}  handleClick={toggleFavorite} />
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                     <p>{contact.location}</p>
                </div>
                <button id="click" className="form-button" onClick={toggleFavorite}>Click Me</button>
            </article>
            
        </main>
    )
}

