import React, { useState } from "react";
import Answer from './Answer';



const Question = ({ questions }) => {
    const [score,setScore] = useState(0);
    const [iterator, setIterator] = useState(0);

    const nextQuestion = () => {
        setIterator(iterator => iterator +1);
    }
    
    const upScore = () => {
        setScore(score => score+1);
    }

    return (
            <div className="question">
            {questions.length >0 ?
            (<>
                <div>
                    <p>{questions[iterator].question}</p>
                </div>
                <div>
                    <Answer answer={{
                                incorrect_answers: questions[iterator].incorrect_answers ,
                                correct_answer: questions[iterator].correct_answer
                    }}  onNextQuestion={nextQuestion}
                        onRightQuestion={upScore}/>
                </div>
            </>) :
            (<div> 
                <p> Waiting for question </p>
            </div>)
            }
        </div>  
        
    )


}

export default Question;