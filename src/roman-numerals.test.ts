import { test, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {}
}

test.each([['I', 1]])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
