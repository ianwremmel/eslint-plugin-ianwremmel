'use strict';

module.exports = {
  rules: {
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    indent: [
      'error',
      2,
      {
        // Honestly, I don't care where switch cases go, but most editors seem to
        // indent them differently from the eslint default, so I'm overriding the
        // default here.
        SwitchCase: 1,
      },
    ],
    'new-cap': [
      'error',
      {
        capIsNew: true,
        capIsNewExceptions: ['S', '^express\\.Router$'],
        newIsCap: true,
      },
    ],
    quotes: ['error', 'single', {avoidEscape: true}],
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'sort-keys': 'error',
  },
};
