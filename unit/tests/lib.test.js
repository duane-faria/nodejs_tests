const { lineBreak } = require('acorn');
const lib = require('../lib');

test('absolute - should return a positive number if input is positive', () => {
  const res = lib.absolute(1);
  expect(res).toBe(1);
});

test('absolute - should return a negative number if input is negative', () => {
  const res = lib.absolute(-1);
  expect(res).toBe(1);
});

test('absolute - should return a negative number if input is negative', () => {
  const res = lib.absolute(-1);
  expect(res).toBe(1);
});
