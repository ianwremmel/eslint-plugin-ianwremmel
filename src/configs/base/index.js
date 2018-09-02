'use strict';

module.exports = {
  extends: [
    ['eslint:recommended', 'plugin:eslint-comments/recommended'],
    [
      './rules/best-practices.js',
      './rules/errors.js',
      './rules/es6.js',
      './rules/strict.js',
      './rules/style.js',
      './rules/variables.js',
      './rules/import.js'
    ].map(require.resolve),
    ['plugin:prettier/recommended']
  ].reduce((a, i) => a.concat(i), []),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script'
  },
  plugins: ['import'],
  rules: {
    'prettier/prettier': ['error', require('../../prettier.json')]
  }
};
