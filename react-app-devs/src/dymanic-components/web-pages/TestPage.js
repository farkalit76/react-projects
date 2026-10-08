import React from "react";

export default function Page(){
    
    function handleClick(){
        console.log("I was clicked!");
        //alert('I was clicked');
    }

    function handleMouseOver(){
        console.log("MouseOver Event!");
    }


    //  function addItem(){
    //     const thingsArray =["Thing 1", "Thing 2", "Thing 3"];
    //     let newThingText = `Thing ${thingsArray.length + 1}`;
    //     thingsArray.push(newThingText);
    // }
    
    //Use React State example (which is mutable but note Props are immutable)
    const[things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem(){
        let newThingText = `Thing ${things.length + 1}`;
        setThings(prevState => [...prevState, newThingText])
    }
    const thingsElements = things.map( thing =>  <p key={thing}>{thing}</p>);
    console.log("thingsElements: "+thingsElements);

    function greeting(){

        var name = document.getElementById("name").value;
        name = (name == "") ? "Bob" : name;
        const date = new Date();
        const hour = date.getHours();
        let timeOfDay;
        if( hour >= 4 && hour <12) {
            timeOfDay = "morning";
        } 
        else  if( hour >= 12 && hour <17) {
            timeOfDay = "afternoon";
        } 
        else  if( hour >= 17 && hour <20) {
            timeOfDay = "evening";
        } 
        else {
            timeOfDay = "night";
        }
        const message = `Good ${timeOfDay} ${name}`;
        console.log("message :"+message);
        return message;
    }


    const result = React.useState();
    console.log(result);

    const isTrue = React.useState("Yes");
    console.log("isTrue: "+isTrue);

    const [isImportant, setIsImportant] = React.useState("Yes");
    
    function handleState(){
        setIsImportant("No");
        console.log("isImportant: "+isImportant);
    }
   
    const [count, setCount] = React.useState(0);
    

    function addCount(){
        setCount(count + 1);
    }

   
    // function subtractCount(){
    //     setCount(count - 1);
    // }

    //OR like this way to chnage state
    // function subtractCount(){
    //     setCount(prevCount => prevCount - 1);
    // }

    //OR like this way to chnage state
    function subtractCount(){
        setCount(function(prevCount) {
            const newCount = prevCount - 1;
            return newCount;
        } 
    )}


    console.log("count: "+count);
    return (
        <main>
            <img  src="./images/travel-kashmir.jpg"    onMouseOver={handleMouseOver}/><br/>
            <button id="click" onClick={handleClick}   className="form-button">Click Me</button>
            <input id="name" type="text" placeholder="Name"/>
            <button id="greet" onClick={greeting}      className="form-button">Greeting</button>
            <button id="state" onClick={handleState}   className="form-button">Change State Value</button>
            <div>
                <h3>Do I feel Cold today? : {isImportant}</h3>
            </div>

             <br/>
            <div className="state-page">
                <button id="minus" onClick={subtractCount}>(-)</button>
                <span>{count}</span>
                <button id="add"  onClick={addCount}>(+)</button>
            </div>
            <button id="addItem" onClick={addItem}       className="form-button">Add Item</button>
            <div>
                {thingsElements}
            </div>
        </main>
    )
    greeting();
}

