import React from "react"

import Joke from "./z-components/Joke";

import "./style.css";


// JSX
export default function AppJoke(){
    return (
        <div className="joke-setup">
            <Joke 
                jokeId={1}
                setup="Why did the programmer go broke?" 
                punchline="Because he used up all his cache!" 
                isPun={false}
                upvotes={20}
                downvotes={2}
                comments={[{author: "a", title:"a", message:"a"}]}
            />
            <Joke 
                jokeId={2}
                setup="Why do Java developers wear glasses?" 
                punchline="Because they don't see sharp!" 
                isPun={true}
                upvotes={120}
                downvotes={12}
                comments={[{author: "Xyz", title:"a", message:"a"}]}
                />
            <Joke 
                jokeId={3}
                setup="What did the Wi-Fi say to the computer?" 
                punchline="I feel like we're connected." 
                 isPun={true}
                upvotes={20}
                downvotes={2}
                comments={[{author: "c", title:"c", message:"c"}]}
                />
            <Joke 
                jokeId={4}
                setup="Why was the developer always calm?" 
                punchline="Because he knew how to handle his exceptions!" 
                 isPun={true}
                upvotes={20}
                downvotes={2}
                comments={[{author: "z", title:"z", message:"z"}]}
                />
            <Joke 
                jokeId={5}
                setup="What is developer needs?" 
                punchline="He feels if we finish more task will be assigned." 
                isPun={false}
                upvotes={20}
                downvotes={2}
                comments={[{author: "z", title:"z", message:"z"}]}
                />
        </div>
    )
}