'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  env: {
    browser: true,
  },
  extends: loadRules(__dirname),
  rules: {},
};
