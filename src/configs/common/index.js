'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  extends: ['eslint:recommended', 'plugin:eslint-comments/recommended']
    .concat(loadRules(__dirname))
    .concat(['plugin:prettier/recommended']),
  overrides: [
    // Apply lint to fenced JavaScript code blocks in markdown files.
    {
      files: ['**/*.md'],
      parserOptions: {
        impliedStrict: true
      },
      //  These rules cannot be satisfied by fenced code blocks as they are
      //  effectively partial JavaScript files.
      rules: {
        'eol-last': 'off',
        strict: 'off',
        'unicode-bom': 'off'
      }
    }
  ],
  plugins: ['import', 'markdown'],
  rules: {
    'prettier/prettier': ['error', require('../../prettier.json')]
  }
};
