'use strict';

module.exports = {
  extends: ['../base', './rules/es6.js', './rules/style.js'].map(
    require.resolve
  )
};
