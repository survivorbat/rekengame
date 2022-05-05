import generateEquation, { randomNumber, randomOperator } from './generator';

describe('randomNumber', () => {
  const testData = [
    { min: 0, max: 2 },
    { min: 5, max: 120 },
    { min: 100, max: 101 },
  ];

  testData.forEach(({ min, max }) => {
    it(`returns a number between ${min} and ${max}`, () => {
      // Act
      const result = randomNumber(min, max);

      // Assert
      expect(result).toBeLessThanOrEqual(max);
      expect(result).toBeGreaterThanOrEqual(min);
    });
  });
});

describe('randomOperator', () => {
  const testData = [['a'], ['b', 'c', 'd', 'e']];

  testData.forEach((operators: string[]) => {
    it(`returns a random item in ${operators.join(', ')}`, () => {
      // Act
      const result = randomOperator(operators);

      // Assert
      expect(operators).toContain(result);
    });
  });
});

describe('generateEquation', () => {
  const testData = [
    {
      operators: ['+'],
      count: 2,
      min: 0,
      max: 1,
      expectedLength: 5,
    },
    {
      operators: ['+', '-', '*', '/'],
      count: 4,
      min: 100,
      max: 999,
      expectedLength: 21,
    },
  ];

  testData.forEach(({
    operators, max, min, count, expectedLength,
  }) => {
    it('returns expected equation length', () => {
      // Act
      const result = generateEquation(operators, count, min, max).toString();

      // Assert
      expect(result).toHaveLength(expectedLength);
    });
  });
});
