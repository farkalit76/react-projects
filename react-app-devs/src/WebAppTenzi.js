import React from "react"

import Tenzies from "./dymanic-components/tenzi-pages/Tenzies";

import "./style-tenzie.css";

import {nanoid} from "nanoid"

import Confetti from "react-confetti"


// JSX
export default function WebAppTenzi(){

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [startTime, setStartTime] = React.useState(new Date())
    const [counter, setCounter] = React.useState(0)

    React.useEffect( () =>{

      const allHeld = dice.every( die => die.isHeld)
      const firstValue = dice[0].value;
      const allSameValue = dice.every( die => die.value === firstValue)

      if( allHeld && allSameValue){
        setTenzies(true)
        console.log("You won the game!")
      }
        
    }, [dice])


    function generateNewDie(){
        return { 
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }
    }

    function allNewDice() {
        const newDice = []
        for(let i=0; i< 10; i++){
            newDice.push(generateNewDie())
        }
        return newDice
    }

    //console.log("AllNewDice: ", allNewDice())  
    
    function rollDice(){
        //console.log("dice-rolling...")
        //setDice(allNewDice())
        setCounter(counter + 1);

        if(!tenzies){
            setDice(oldDice => oldDice.map( die => {
                return die.isHeld ? die : generateNewDie()
            }))
        } else {
            setStartTime(new Date())
            setCounter(0)
            setTenzies(false)
            setDice(allNewDice())
        }
    }


    function holdDice(id){
        console.log("holding die:"+id)

        const holdDice = dice.map( die => {
                    return die.id === id ? 
                    {...die, isHeld: !die.isHeld } :
                    die });

        setDice(holdDice)
    }

    const diceElement = dice.map( die => {
        return <Tenzies key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    })

    function getTimeDiff(){

        if(tenzies){
            console.log("startTime :", startTime.getTime())
            const endTime =  new Date() ;
            console.log("endTime :", endTime.getTime())
            const msDifference  =  endTime.getTime() - startTime.getTime()
            console.log("msDifference :", msDifference )
           
            // 2. Convert to various units
            const seconds = Math.floor(msDifference / 1000);
            const minutes = Math.floor(msDifference / (1000 * 60));
            const hours   = Math.floor(msDifference / (1000 * 60 * 60));
            const days    = Math.floor(msDifference / (1000 * 60 * 60 * 24));
            console.log(`Difference: ${days} days (or ${hours} hours, or ${minutes} minutes)`);
            return `${minutes} minutes && ${seconds}  seconds`
        }
    }

    return (
        <main>
            {tenzies && <Confetti />}
            <h2 className="title">Tenzies</h2>
            <p className="instructions">Roll untill the dice are the same numbers.
            Click each die to freze it at its current value between rolls.</p>
            <div className="dice-container">
               {diceElement}
            </div>
            <button className="roll-button" onClick={rollDice}> 
                {tenzies ? "New Game" : "Roll"} 
            </button>
            {tenzies && <div> Time taken : {getTimeDiff()} </div> }
            <div> Counters: {counter}</div>
        </main>
    )
}