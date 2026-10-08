import React from "react";

export default function WindowTracker(){
    
    const[windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    // React.useEffect( () => {
    //     window.addEventListener("resize", function(){
    //         //console.log("Resized..."+window.innerWidth)
    //         setWindowWidth(window.innerWidth)
    //     })
    // }, [])

    React.useEffect( () => {

        function watchWidth(){
            console.log("Setting up..."+window.innerWidth)
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize" , watchWidth)

        return function(){
        window.removeEventListener("resize", watchWidth)
            console.log("Cleaning up...")
        }

    }, [])


    return (
        <h1>Window width : {windowWidth}</h1>
    )
}

