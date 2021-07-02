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
        impliedStrict: true,
      },
      processor: 'markdown/markdown',
      // These rules just don't make sense when checking what is, effectively,
      // part of a file
      rules: {
        'eol-last': 'off',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/require-description': 'warn',
        'no-undef': 'off',
        'require-jsdoc': 'off',
        strict: 'off',
        'unicode-bom': 'off',
      },
    },
  ],
  plugins: ['import', 'markdown'],
};
