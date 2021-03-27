const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  testMatch: ['**/?(*.)+(integration).[jt]s?(x)'],
};
