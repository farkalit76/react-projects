import React from "react";

export default function Joke(props){

    console.log(props.isPun);

    return (
        <div>
            <p>jokeId : {props.jokeId}</p>
            <h3>Setup : {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
            <div>
                <span>Up:{props.upvotes}</span> 
                <span>, Down:{props.downvotes}</span>
            </div>
            <div>
               <span>Author:{props.comments.author}</span> 
                <span>, Title:{props.comments.title}</span>
                <span>, Message:{props.comments.message}</span>
            </div>
            <hr/>
        </div>
    )
}