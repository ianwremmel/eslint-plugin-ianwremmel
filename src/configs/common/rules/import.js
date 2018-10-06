'use strict';

module.exports = {
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/order': ['error', {'newlines-between': 'always'}],
    'import/unambiguous': 'off'
  }
};
