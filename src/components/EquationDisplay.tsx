import * as React from 'react';

interface EquationInputs {
  equation: string;
}

function EquationDisplay({ equation }: EquationInputs) {
  return (
    <div className="text-center">
      <span style={{ fontSize: '10em' }} className="equation-display">{equation}</span>
    </div>
  );
}

export default EquationDisplay;
