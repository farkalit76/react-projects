import React from "react";

export default function CardHeader(){

    return (
        <div>
            <div>
                <img src="./images/farkalit-usman-02.png" alt="farkalit Usman" />
            </div>

            <div>
                <h2>Farkalit Usman </h2>
                <p>Java Backend Developer</p>
                <p>farkalit.usman76@gmail.com</p>
            </div>

            <div className="button-link">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}