import React from "react";

import {nanoid} from "nanoid"

export default function Question(props){

    const styles = {
        backgroundColor:  props.isCorrect ? "lightgreen" : "" 
    }
    return (
            <div className="question">
                <p style={styles} >Q : {props.question}</p>
                <div className="options">
                    { props.answers.map((answer, index) => (
                        <label  key={index} >
                            <input name={`${props.id}`} type="radio" 
                                value={String.fromCharCode(65 + index)} onChange={props.answerSelected} /> 
                                {String.fromCharCode(65 + index)}) {answer}
                        </label>
                    )) }
                    
                </div>
            </div>
    )
}
