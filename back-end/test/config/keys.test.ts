import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MONGODB_URL,
  TEST_MONGODB_URL,
} from '../../src/config/keys';

describe('keys should be return string value', () => {
  it('test values', () => {
    expect(typeof GOOGLE_CLIENT_ID).toBe('string');
    expect(typeof GOOGLE_CLIENT_SECRET).toBe('string');
    expect(typeof MONGODB_URL).toBe('string');
    expect(typeof TEST_MONGODB_URL).toBe('string');
  });
});
