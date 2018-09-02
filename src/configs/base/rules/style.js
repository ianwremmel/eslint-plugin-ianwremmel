'use strict';

module.exports = {
  rules: {
    camelcase: 'error',
    indent: [
      'error',
      2,
      {
        // This is the default, I'm just really excited it's finally
        // an available rule.
        MemberExpression: 1,
        // Honestly, I don't care where switch cases go, but most editors seem to
        // indent them differently from the eslint default, so I'm overriding the
        // default here.
        SwitchCase: 1
      }
    ],
    'new-cap': [
      'error',
      {
        capIsNew: true,
        capIsNewExceptions: ['S', '^express\\.Router$'],
        newIsCap: true
      }
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
          MethodDefinition: true
        }
      }
    ],
    'sort-keys': 'error'
  }
};
