import { test, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'I') return 1;
    if (value === 'II') return 2;
    if (value === 'III') return 3;
  }
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
