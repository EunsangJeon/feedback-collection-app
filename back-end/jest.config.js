process.env.PORT = 5001;

module.exports = {
  // Reference: https://jestjs.io/docs/en/configuration.html
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
