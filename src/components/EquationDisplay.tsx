import * as React from 'react';
import './EquationDisplay.css';

interface EquationInputs {
  equation: string;
}

function EquationDisplay({ equation }: EquationInputs) {
  return (
    <div className="equation-container">
      <span className="equation-display">{equation}</span>
    </div>
  );
}

export default EquationDisplay;
