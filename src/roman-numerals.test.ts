import { test, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'I') return 1;
  }
}

test.each([['I', 1]])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
