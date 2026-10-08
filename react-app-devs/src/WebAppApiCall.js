import React from "react"

import TestPage from "./dymanic-components/web-pages/TestPage";

import "./style-web.css";

// JSX
export default function WebAppApiCall(){

    const[starWarData, setStarWarData] =React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("component rendered...")

    // fetch("https://swapi.dev/api/people/1")
    // .then(res => res.json())
    // .then(data => console.log(data))
    // //.then(data => setStarWarData(data))

    //side effect of react render data

    // React.useEffect(function() {
    //      console.log("swapi effect run...")
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarData(data))
    // }, [])

    const[allMemes, setAllMemes] =React.useState({})

    React.useEffect(() => {
          console.log("image effect run...")
        fetch("https://api.imgflip.com/get_memes")
        .then( resp => resp.json())
        .then( data => setAllMemes(data.data.memes))
    }, [])

    return (
        <div>
            {/* <pre>{data}</pre> */}
            {/* <pre>{JSON.stringify(starWarData, null, 2)}</pre> */}
            

            <p>This is count : {count} </p>
            <button onClick={ () => setCount(prevCount => prevCount+1)}>Add</button>

           
            <div>
                <img  src="https://i.imgflip.com/30b1gx.jpg" className="meme-image" alt="meme_image" />
            </div>

             <pre>{JSON.stringify(allMemes, null, 2)}</pre>
        </div>
    )
}