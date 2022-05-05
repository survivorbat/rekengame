import * as React from 'react';

interface InputProps {
  previousSolution: number;
  previousCorrect: boolean | undefined;
  score: number;
}

function Hud({ previousCorrect, previousSolution, score }: InputProps) {
  const previousSolutionClass = previousCorrect ? 'correct' : 'incorrect';

  return (
    <div className="hud-container">
      <span className="score-container">
        Score:&nbsp;
        {score}
      </span>
      <span
        style={{
          visibility: previousCorrect === undefined ? 'hidden' : 'visible',
        }}
        className="previous-container"
      >
        Previous:&nbsp;
        <span className={`previous-display ${previousSolutionClass}`}>
          {previousSolution || ''}
        </span>
      </span>
    </div>
  );
}

export default Hud;
