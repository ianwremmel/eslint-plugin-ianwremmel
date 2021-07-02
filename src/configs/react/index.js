'use strict';

module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
