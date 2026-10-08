import React from "react";

import jokesData from "./z-components/jokesData";
import MyJoke from "./dymanic-components/web-pages/MyJoke";

export default function WebAppMyJoke(){


    return (
        jokesData.map((joke) => {
          console.log(joke);
           
             return <MyJoke jokeId={joke.jokeId} 
             key={joke.jokeId} 
             setup={joke.setup} 
             punchline={joke.punchline}
             isShown = {joke.isShow}
             />
        })
    )
}