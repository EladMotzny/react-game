import React from "react";

const Answer = ( { answer, onNextQuestion, onRightQuestion } ) => {

    const rightAnswer = () => {
        onNextQuestion();
        onRightQuestion();
    }

    const checkCorrectAnswer = (ans) => {
        ans.isCorrectAnswer ? rightAnswer() : onNextQuestion()
    }
    
    return (
        <div className="Answer">
            {console.log(answer.ansArr.length)}
            {answer.ansArr.length > 0 ? answer.ansArr.map((ans) => (
                <button className="answer-btn"
                onClick={() => checkCorrectAnswer(ans)}>{ans.text}</button>
            )) : 'No answers yet'}
        </div>
    )
}

export default Answer;