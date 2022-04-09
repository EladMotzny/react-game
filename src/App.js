import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Question from './Components/Question';


const API_URL = 'https://opentdb.com/api.php?amount=100'

function App() {

  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data.results)
    setQuestions(data.results);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="App">
      <div className='question-container'>
       <Question questions={questions}/>
      </div>
    </div>
  );
}

export default App;
