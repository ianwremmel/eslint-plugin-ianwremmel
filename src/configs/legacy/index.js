'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  extends: ['../common', '../common-browser']
    .map(require.resolve)
    .concat(loadRules(__dirname)),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script'
  },
  rules: {}
};
