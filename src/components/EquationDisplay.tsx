import * as React from 'react';

interface EquationInputs {
  equation: string;
}

function EquationDisplay({ equation }: EquationInputs) {
  return (
    <div className="text-center">
      <span style={{ fontSize: '8em' }} className="equation-display">
        {equation}
      </span>
    </div>
  );
}

export default EquationDisplay;
