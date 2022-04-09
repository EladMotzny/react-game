import React from "react";

const Answer = ( { answer } ) => {
    return (
        <div className="Answer">
             {answer.incorrect_answers.map((ans) => (
                <button className="answer-btn">{ans}</button>
            ))}
            <button className="answer-btn">{answer.correct_answer}</button> 
        </div>
    )
}

export default Answer;