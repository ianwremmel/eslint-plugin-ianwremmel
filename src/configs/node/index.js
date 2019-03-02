'use strict';

const {loadRules} = require('../../lib/helpers');

module.exports = {
  env: {
    node: true,
  },
  extends: ['../common', '../common-modern']
    .map(require.resolve)
    .concat(loadRules(__dirname)),
};
