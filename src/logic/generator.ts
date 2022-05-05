import * as math from 'mathjs';

export const randomNumber = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

export const randomOperator = (operators: string[]) => operators[Math.floor(Math.random() * operators.length)];

const generateEquation = (
  operators: string[],
  count: number,
  min: number,
  max: number,
): math.MathNode => {
  const start: string[] = [randomNumber(min, max).toString()];

  for (let i = 1; i < count; i += 1) {
    start.push(randomOperator(operators), randomNumber(min, max).toString());
  }

  return math.parse(start.join(' '));
};

export default generateEquation;
