import {loadRules} from '../../lib/helpers.mjs';

export default {
  extends: ['eslint:recommended', 'plugin:eslint-comments/recommended']
    .concat(loadRules(import.meta.url))
    .concat(['plugin:prettier/recommended']),
  overrides: [
    // Apply lint to fenced JavaScript code blocks in markdown files.
    {
      files: [
        '**/*.md',
        // need the trailing /** to pick up code blocks in markdown files
        '**/*.md/**',
      ],
      parserOptions: {
        impliedStrict: true,
      },
      processor: 'markdown/markdown',
      // These rules just don't make sense when checking what is, effectively,
      // part of a file
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'eol-last': 'off',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/require-description': 'warn',
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        strict: 'off',
        'unicode-bom': 'off',
      },
    },
  ],
  plugins: ['import', 'markdown'],
};
