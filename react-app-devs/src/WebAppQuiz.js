import React from "react"

import "./style-quiz.css";
import Question from "./dymanic-components/web-pages/Question";

import questionData from "./dymanic-components/web-pages/questionData.js"

import Confetti from "react-confetti"

// JSX
export default function WebAppQuiz(){

    //const [realAnswers, setRealAnswers] = React.useState(questionData)
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [allCorrect, setAllCorrect] = React.useState(false)

    const [randomQuestion, setRandowQuestion] = React.useState([])

    function getRandomQuestions(data, count = 3) {
        // Create a shallow copy so we don't mutate the original array
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }
    
    React.useEffect(() => {
        const randomQuestions = getRandomQuestions(questionData, 3);
        console.log("randomQuestions: ",randomQuestions);
        setRandowQuestion(randomQuestions)
    }, [])
    
    

    function answerSelected(event){
        const questionNum = Number(event.target.name)
        const answerChosen = event.target.value
        console.log("answerSelected : " + questionNum + " : " + answerChosen)

        const question = randomQuestion.find(answer => answer.id === (questionNum));
        const isCorrect = question.answer === answerChosen;
        //setSelectedAnswers(prevAnswer => [...prevAnswer, {id: questionNum, answer: answerChosen, isCorrect: isCorrect } ])

        setSelectedAnswers(prevAnswers => [
            ...prevAnswers.filter(answer => answer.id !== questionNum),
            { id: questionNum, answer: answerChosen, isCorrect: isCorrect }
        ]);
    }
    //console.log("selectedAnswers:", selectedAnswers)

    function submitForm(event){

        if (!allCorrect) {
            console.log("submitForm: selectedAnswers:", selectedAnswers)
            event.preventDefault()
        
            if( !(selectedAnswers.length === 3 ) ) {
                console.log("All answer is not given..");
                return;
            }

            const allCorrect = selectedAnswers.every(resp => {
                const correctAnswer = randomQuestion.find(answer => answer.id === resp.id);
                return correctAnswer && correctAnswer.answer === resp.answer;
            });

            console.log("allCorrect:", allCorrect);
            if(allCorrect){
                setAllCorrect(true)
                console.log("Well done!!!");
            }else{
                console.log("Not all answers are correct");
            }
        }
        
    }

    const questionElements= randomQuestion.map(ques => {
        const question = selectedAnswers.find(answer => answer.id === ques.id);
        let correct = question ? question.isCorrect : false;
        //console.log("correct:", correct)
        return <Question key={ques.id} id={ques.id} 
        question={ques.question}  answer={ques.answer} answers={ques.answers}  isCorrect={correct}
        answerSelected={answerSelected} />
    })

    return (
        <div className="quiz-container">
            {allCorrect && <Confetti />}
            <h1>Quick Software Quiz</h1>
            <form onSubmit={submitForm}>
                {questionElements}
                <button type="submit">{ allCorrect ? "Well done!" : "Submit Form" }</button>
            </form>
        </div>
    )
}