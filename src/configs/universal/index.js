'use strict';

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['../standard', '../node', '../browser'].map(require.resolve)
};
