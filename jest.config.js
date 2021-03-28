/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  //coverageProvider: 'v8',
  //testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }, 
  watchPathIgnorePatterns: ['globalConfig.json'],
}
