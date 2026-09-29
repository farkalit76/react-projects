import React from "react"


import jokesData from "./z-components/jokesData";
import Joke from "./z-components/Joke";
import MyMaps from "./z-components/MyMaps";
import "./style.css";


const nums =[1, 2, 3, 4, 5]
//Array.map() -> to iterate the array -> It is handling as forloop.
const square = nums.map(function(item){
   return item * item;
}
)
console.log("square:"+square);

const names = ["Shahid", "Basit", "Usman", "Ahmad", "Jamil"]

const uppperName = names.map( function(name) {
    return name.toUpperCase();
})
console.log("uppperName:"+uppperName);

const uppercase = names.map( (name) => {
    return name[0].toUpperCase() + name.slice(1);
} )
console.log("uppercase:"+uppercase);


const pokeman = ["Shahid", "Basit", "Usman"]

const paragraph = pokeman.map( (poke) => `<p>${poke}<p/>`)

console.log("paragraph:"+paragraph);


const colors = ["Red", "Blue", "Green", "Orange", "White", "Black"]

console.log("colors :"+colors);
const strColors = colors.map( (color) => { 
    return color.slice(0) + ", ";
})
console.log("strColors:"+strColors);



// JSX
export default function AppMaps(){

    console.log(jokesData);
    const jokeElements = jokesData.map( (joke) => {
        return <Joke key={joke.jokeId} setup={joke.setup} punchline={joke.punchline} isPun={joke.isPun} upvotes={joke.upvotes} downvotes={joke.downvotes} comments={joke.comments} />
    })
    console.log("jokeElements :"+jokeElements)

    return (
        <div>
            <MyMaps />

            <h3>Please look the response in Console Log.</h3>
            
            <b>{strColors}</b>

            {jokeElements}
        </div>
    )
}