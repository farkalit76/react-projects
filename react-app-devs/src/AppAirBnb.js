import React from "react"

import AirNavbar from "./airbnb-components/AirNavbar";
import AirCard from "./airbnb-components/AirCard";
import AirHero from "./airbnb-components/AirHero";

import "./style-airbnb.css";

import airData from "./airbnb-components/airData";

// JSX
export default function AppAirBnb(){

    console.log(airData);
    const airList = airData.map( (air) => {
        return <AirCard
                    key={air.id}
                    image={air.image}
                    rating={air.rating}
                    reviewCount={air.reviewCount}
                    country={air.country}
                    title= {air.title}
                    price={air.price}
                    openSpots={air.openSpots}
                />;
    })

    return (
        <div>
             <AirNavbar/>
             <AirHero/>
             <div className="contact-cards">
                {airList}
             </div>
        
        </div>
    )
}

//export default function AppAirBnb(){
//
    // return (
    //     <div>
    //         <AirNavbar/>
    //         {/* <AirMain/> */}
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