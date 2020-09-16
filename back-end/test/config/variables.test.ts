import { PORT, NODE_ENV } from '../../src/config/variables';

describe('variables should be expected type', () => {
  it('test values', () => {
    expect(typeof PORT).toBe('number');
    expect(typeof NODE_ENV).toBe('string');
  });
});
