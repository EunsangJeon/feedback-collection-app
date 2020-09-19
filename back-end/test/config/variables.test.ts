/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

describe('variables should be expected type', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it('test values in normal case', () => {
    const vars = require('../../src/config/variables');

    expect(typeof vars.PORT).toBe('number');
    expect(typeof vars.NODE_ENV).toBe('string');
  });

  it('test the case of invalid process.env', () => {
    process.env.PORT = undefined;
    process.env.NODE_ENV = undefined;

    const vars = require('../../src/config/variables');

    expect(vars.PORT).toBe(5000);
    expect(vars.NODE_ENV).toBe('development');
  });
});
