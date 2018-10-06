'use strict';

module.exports = {
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        selector: 'ForOfStatement'
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      },
      {
        // I'd rather prevent async functions, but they're a variant of
        // FunctionExpression, not a syntax in and of themselves.
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them.',
        selector: 'AwaitExpression'
      }
    ]
  }
};
