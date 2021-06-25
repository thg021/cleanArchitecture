/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
 // coverageProvider: 'v8',
 testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
