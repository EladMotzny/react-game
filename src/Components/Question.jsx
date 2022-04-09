import React, { useState } from "react";
import Answer from './Answer';



const Question = ({ questions }) => {
    //const [score,setScore] = useState(0);
    const [iterator, setIterator] = useState(0);

    

    return (
            <div className="question">
            {questions.length >0 ?
            (<>
                <div>
                    <p>{questions[0].question}</p>
                </div>
                <div>
                    <Answer answer={{
                                incorrect_answers: questions[0].incorrect_answers ,
                                correct_answer: questions[0].correct_answer
                    }}/>
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