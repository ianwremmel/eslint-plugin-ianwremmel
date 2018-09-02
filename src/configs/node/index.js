'use strict';

module.exports = {
  env: {
    browser: false,
    node: true
  },
  extends: ['../base'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script'
  }
};
