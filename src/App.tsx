import * as React from 'react';
import './App.css';
import { useState } from 'react';
import generateEquation from './logic/generator';
import AnswerInput from './components/AnswerInput';
import EquationDisplay from './components/EquationDisplay';
import Hud from './components/Hud';

const getMinFromScore = (score: number) => Math.ceil(score / 20);
const getMaxFromScore = (score: number) => Math.ceil(score / 2) + 1;
const getCountFromScore = (score: number) => (Math.ceil(score / 50) || 1) + 1;
const getOperatorsFromScore = (score: number): string[] => {
  const operators = ['+'];

  if (score > 10) {
    operators.push('-');
  }

  if (score > 30) {
    operators.push('*');
  }

  return operators;
};

function nextEquation(
  score: number,
  callback: (equation: math.MathNode) => void,
) {
  const count = getCountFromScore(score);
  const min = getMinFromScore(score);
  const max = getMaxFromScore(score);
  const operators = getOperatorsFromScore(score);

  callback(generateEquation(operators, count, min, max));
}

function App() {
  const [score, setScore] = useState(0);
  const [equation, setEquation] = useState(generateEquation(['+'], 2, 1, 1));
  const [previousSolution, setPreviousSolution] = useState(0);
  const [previousCorrect, setPreviousCorrect] = useState(
    (): boolean | undefined => undefined,
  );

  const validateAnswer = (answer: number) => {
    const solution = equation.evaluate();

    setPreviousSolution(solution);

    if (solution === answer) {
      setScore(score + 1);
      setPreviousCorrect(true);
    } else {
      setScore(score - 1);
      setPreviousCorrect(false);
    }

    nextEquation(score, setEquation);
  };

  return (
    <div className="container">
      <EquationDisplay equation={equation.toString()} />
      <div>
        <Hud
          score={score}
          previousCorrect={previousCorrect}
          previousSolution={previousSolution}
        />
        <AnswerInput submitAnswerCallback={validateAnswer} />
      </div>
    </div>
  );
}

export default App;
