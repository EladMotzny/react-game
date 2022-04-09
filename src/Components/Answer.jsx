import React from "react";


const Answer = ( { answer, onNextQuestion, onRightQuestion } ) => {
    
    const rightAnswer = () => {
        onNextQuestion();
        onRightQuestion();
    }
    
    return (
        <div className="Answer">
             {answer.incorrect_answers.map((ans) => (
                <button className="answer-btn"
                onClick={onNextQuestion}>{ans}</button>
            ))}
            <button className="answer-btn"
            onClick={rightAnswer}>{answer.correct_answer}</button> 
        </div>
    )
}

export default Answer;