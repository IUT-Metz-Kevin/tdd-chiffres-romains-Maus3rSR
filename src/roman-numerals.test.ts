import { test, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    let index = 0;
    let resultat = 0;
    while (value[index]) {
      if (value[index] === 'I') resultat += 1;
      if (value[index] === 'V') resultat += 5;
      if (value[index] === 'X') resultat += 10;
      if (value[index] === 'L') resultat += 50;
      if (value[index] === 'C') resultat += 100;
      if (value[index] === 'D') resultat += 500;
      if (value[index] === 'M') resultat += 1000;
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
])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
