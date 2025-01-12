import React, { useState } from "react";
import "./App.css";
import questions from "./Question";

function App() {
  const [quesIndex, setQuesIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleClick = () => {
    setQuesIndex(quesIndex + 1);
    if (questions[quesIndex].answer === answer) setScore(score + 1);
  };
  const handleChange = (val: string) => {
    setAnswer(val);
  };

  return (
    <div className='App'>
      <h1 className='App-header'>Quiz App</h1>

      {quesIndex > 4 ? (
        <>
          <h2>Results</h2>
          <p style={{ textAlign: "center" }}>Your Score is .... {score}</p>
        </>
      ) : (
        <>
          <p>{questions[quesIndex].question}</p>
          {questions[quesIndex].options.map((option, i) => {
            return (
              <div>
                <input
                  type='radio'
                  id={option}
                  name='capital'
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                  checked={answer === option}
                  value={option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
          <button onClick={handleClick}>Submit</button>
        </>
      )}
    </div>
  );
}

export default App;
