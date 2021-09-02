const {defaults} = require('jest-config');

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};