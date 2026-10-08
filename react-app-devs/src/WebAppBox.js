import React from "react"

import "./style-web.css";
import boxesData from "./dymanic-components/box-pages/boxesData";
import Box from "./dymanic-components/box-pages/Box";


// JSX
export default function WebAppBox(){

    const [square, setSquare] = React.useState(boxesData);

    function toggleSwitch(id){
        
        console.log("toggleSwitch called :"+id)
        const newSquares = square.map(temp =>
            temp.id === id ? { ...temp, on: !temp.on } : temp
        );
        setSquare(newSquares);

        // setSquare( prevSquare => {
        //     return prevSquare.map( (square) => {
        //         return square.id === id ? {...square, on: !square.on} : square
        //     } )
        // }) 

        //    const newSquares = [];
        //    square.map( temp => {
        //         if(temp.id == id){
        //           temp.on = !temp.on;
        //           newSquares.push(temp)
        //         }else{
        //             newSquares.push(temp);
        //         }
        //     })
        //     setSquare(newSquares);
        
        //this is rending all the boxes and updating on onle which is clicked.
        //    setSquare( prevSuare => {
        //       const newSquares = []
        //       for(let i=0; i < prevSuare.length; i++){
        //         const tempSquare = prevSuare[i];
        //         if( tempSquare.id === id){
        //             const updateSquare = {
        //                 ...tempSquare,
        //                 on: !tempSquare.on
        //             }
        //             newSquares.push(updateSquare)
        //         }else{
        //             newSquares.push(tempSquare)
        //         }
        //       }
        //       return newSquares;
        //    })
        
    }

    const squareElement= square.map( square => (
         <Box key={square.id} id={square.id} switch={square.on} handleClick={toggleSwitch} />
    ))
    // const squareElement= square.map( square => {
    //     return  <div className="box" key={square.id}></div>
    // })

    return (
        <main>
            {squareElement}
        </main>
    )
}