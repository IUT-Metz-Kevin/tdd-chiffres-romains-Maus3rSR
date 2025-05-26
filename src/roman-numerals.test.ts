import { test, expect } from 'vitest';

class RomanNumeral {
  private symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  of(value: string): number {
    let index = 0;
    let resultat = 0;
    while (value[index]) {
      const romanianChar = value[index];

      if (this.symbolMap[romanianChar])
        resultat += this.symbolMap[romanianChar];
      else throw new Error('Not a Romanian number');

      index++;
    }

    return resultat;
  }
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
  ['IV', 4],
])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
