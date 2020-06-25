'use strict';

module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/react',
      ],
      files: ['**/*.jsx', '**/*.tsx'],
    },
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
