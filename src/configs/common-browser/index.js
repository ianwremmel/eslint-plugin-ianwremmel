'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:compat/recommended'].concat(loadRules(__dirname)),
  rules: {},
};
