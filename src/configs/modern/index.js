'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  extends: ['../common', '../common-modern', '../common-browser']
    .map(require.resolve)
    .concat(loadRules(__dirname)),
  parserOptions: {
    sourceType: 'module'
  }
};
