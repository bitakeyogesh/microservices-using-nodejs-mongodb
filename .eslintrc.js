module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  plugins: ['jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': 0,
    'max-len': [2, 160, 4]
  },
};
