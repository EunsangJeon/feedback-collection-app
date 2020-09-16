import { googleStrategy } from '../../src/services/passport';

describe('passport.ts', () => {
  it('should use google strategy', () => {
    expect(googleStrategy.name).toBe('google');
  });
});
