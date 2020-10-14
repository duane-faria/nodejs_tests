const { it, expect } = require('@jest/globals');
const lib = require('../lib');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const res = lib.absolute(1);
    expect(res).toBe(1);
  });

  it('should return a negative number if input is negative', () => {
    const res = lib.absolute(-1);
    expect(res).toBe(1);
  });

  it('should return a negative number if input is negative', () => {
    const res = lib.absolute(0);
    expect(res).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Mosh');
    expect(result).toMatch(/Mosh/);
  });
});