import React from "react"


import AirHero from "./airbnb-components/AirHero";

import "./style-airbnb.css";

import airData from "./airbnb-components/airData";
import AirCardObject from "./airbnb-components/AirCardObject";

// JSX
export default function AppAirBnbObj(){

    console.log(airData);
    const cards = airData.map( (item) => {
        return <AirCardObject
                    key={item.id}
                    item={item}
                />;
    })

    return (
        <div>
             <AirNavbar/>
             <AirHero/>
             <div className="contact-cards">
                {cards}
             </div>
        
        </div>
    )
}

//export default function AppAirBnb(){
//
    // return (
    //     <div>
    //         <AirNavbar/>
    //         {/* <AirHero/> */}
    //          <div className="contact-cards">
    //             <AirCard
    //                 image="katie-zafers.jpg"
    //                 rating="5.0"
    //                 reviewCount={5}
    //                 country="India"
    //                 title="Life lesson with Katie Zaferes"
    //                 price={135}
    //             />
    //             <AirCard
    //                 image="katie-zafers.jpg"
    //                 rating="2.0"
    //                 reviewCount={5}
    //                 country="India"
    //                 title="Life lesson with Katie Zaferes"
    //             />
    //             <AirCard
    //                 image="katie-zafers.jpg"
    //                 rating="3.0"
    //                 reviewCount={5}
    //                 country="India"
    //                 title="Life lesson with Katie Zaferes"
    //             />
    //             <AirCard
    //                 image="katie-zafers.jpg"
    //                 rating="4.0"
    //                 reviewCount={5}
    //                 country="India"
    //                 title="Life lesson with Katie Zaferes"
    //             />
    //         </div> 
    //     </div>
    // )
//}