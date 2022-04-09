import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Question from './Components/Question';


const API_URL = 'https://opentdb.com/api.php?amount=100'

function App() {

  //const [score,setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  // let counter = 0
  // console.log(questions[counter])

  const getQuestions = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
 
    setQuestions(data.results);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="App">
      <div className='question-container'>
        {questions.map((question) => (
          <Question question={question}/>
        ))}
      </div>
    </div>
  );
}

export default App;
