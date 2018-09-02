'use strict';

module.exports = {
  env: {
    browser: true,
    node: false
  },
  extends: ['../base'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};
