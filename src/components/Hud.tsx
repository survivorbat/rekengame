import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

interface InputProps {
  previousSolution: number;
  previousCorrect: boolean | undefined;
  score: number;
}

function Hud({ previousCorrect, previousSolution, score }: InputProps) {
  const previousSolutionColor = previousCorrect ? 'green' : 'red';

  return (
    <Row>
      <Col>
        Score:&nbsp;
        {score}
      </Col>
      <Col
        style={{
          visibility: previousCorrect === undefined ? 'hidden' : 'visible',
        }}
      >
        Previous:&nbsp;
        <span className="fw-bold" style={{ color: previousSolutionColor }}>
          {previousSolution || ''}
        </span>
      </Col>
    </Row>
  );
}

export default Hud;
