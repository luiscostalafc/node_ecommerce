module.exports = {
  roots: ['<rootDir>/app'],
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
}
