import * as React from 'react';
import { useState } from 'react';

interface InputProps {
  submitAnswerCallback: (answer: number) => void;
}

function AnswerInput({ submitAnswerCallback }: InputProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitAnswerCallback(parseInt(answer, 10));
    setAnswer('');
  };

  return (
    <form className="d-flex justify-content-around" onSubmit={handleSubmit}>
      <input
        type="number"
        autoComplete="off"
        className="form-control"
        name="answer"
        value={answer}
        required
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        ➤
      </button>
    </form>
  );
}

export default AnswerInput;
