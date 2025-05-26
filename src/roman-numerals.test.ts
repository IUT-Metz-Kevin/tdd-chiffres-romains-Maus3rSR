import { test, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    let index = 0;
    let resultat = 0;
    while (value[index]) {
      if (value[index] === 'I') resultat += 1;
      index++;
    }

    return resultat;
  }
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
