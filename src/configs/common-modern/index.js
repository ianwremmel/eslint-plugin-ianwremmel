'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  env: {
    es6: true,
  },
  extends: loadRules(__dirname),
  globals: {
    // this is here to specifically allow process.env without marking this as a
    // node-like environment
    process: false,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'script',
  },
};
