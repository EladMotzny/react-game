import React, { useState, useEffect } from "react";
import Answer from './Answer';



const Question = ({ questions }) => {
    const [score,setScore] = useState(0);
    const [iterator, setIterator] = useState(0);
    const [ansArr, setAnsArr] = useState([]);
    
    const upScore = () => {
        setScore(score => score+1);
    }

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        setAnsArr(array)
      }

    const getAns = () => {
        const tempArr = [];
        if (questions.length > 0 && 
            questions[iterator].incorrect_answers.length > 0 && 
            questions[iterator].correct_answer){
            questions[iterator].incorrect_answers.forEach((ans) => {
                tempArr.push({
                    text: ans,
                    isCorrectAnswer: false
                })
            });
            tempArr.push({
                text: questions[iterator].correct_answer,
                isCorrectAnswer: true 
            });
            shuffleArray(tempArr);
        } 
    }

    const nextQuestion = () => {
        setIterator(iterator => iterator +1);
        getAns()
    }
 
    useEffect(() => {
        getAns();
    }, [questions])

    return (
            <div className="question">
                <div className="score-display">
                    <h1>Score: {score}</h1>
                </div>
            {questions.length >0 ?
            (<>
                <div>
                    <h3>{questions[iterator].question}</h3>
                </div>
            </>) :
            (<div> 
                <p> Loading question </p>
            </div>)
            }
            {ansArr.length >0 ? 
                    <Answer answer={{ansArr}}  
                        onNextQuestion={nextQuestion}
                        onRightQuestion={upScore}/> : 
                        (<>
                            <div>
                                <p>Loading answers</p>
                            </div>
                        </>)
            }
        </div>  
    )


}

export default Question;