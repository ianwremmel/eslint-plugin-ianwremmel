'use strict';

module.exports = {
  rules: {
    'no-extra-parens': 'error',
    'require-atomic-updates': 'error',
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          fires: 'emits',
          return: 'returns',
          virtual: 'abstract',
        },
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          String: 'string',
          function: 'Function',
          object: 'Object',
        },
        requireParamDescription: false,
        requireParamType: true,
        requireReturn: false,
        requireReturnDescription: false,
        requireReturnType: true,
      },
    ],
  },
};
