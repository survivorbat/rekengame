import * as React from 'react';
import { useState } from 'react';
import './AnswerInput.css';

interface InputProps {
  submitAnswerCallback: (answer: number) => void
}

function AnswerInput({ submitAnswerCallback }: InputProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitAnswerCallback(parseInt(answer, 10));
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="answer-container">
      <input type="number" className="answer-input" name="answer" value={answer} required onChange={(e) => setAnswer(e.target.value)} />
      <button type="submit" className="answer-button">➤</button>
    </form>
  );
}

export default AnswerInput;
