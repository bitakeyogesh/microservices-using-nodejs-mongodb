const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  collectCoverage: true,
  testPathIgnorePatterns: ['/integration-tests/'],
};
