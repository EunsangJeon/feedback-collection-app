import mockingoose from 'mockingoose';
import model from '../../src/models/User';
import addUser from '../../src/services/addUser';

describe('addUser', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  it('should retun info "existing"', async () => {
    const mockUser = {
      googleId: 'test_mock_google_id',
    };

    mockingoose(model).toReturn(mockUser, 'find');

    let result = '';

    addUser(
      'test_mock_google_id',
      (err?: Error | undefined | string, user?: any, info?: any) => {
        result = info;
      }
    );

    expect(result).toBe('existing');
  });
});
