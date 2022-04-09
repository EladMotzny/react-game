import React from "react";
import Answer from './Answer';



const Question = ({ question }) => {
    const q = {
        incorrect_answers: question.incorrect_answers,
        correct_answer: question.correct_answer
    }

    return (
        <div className="question">
            <div>
                <p>{question.question}</p>
            </div>
            <div>
                <Answer answer={q}/>
            </div>
        </div>
    )


}

export default Question;