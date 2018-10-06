'use strict';

const fs = require('fs');
const path = require('path');

exports.loadRules = loadRules;

/**
 * Loads all of the rule configs in the specified rootDir's `rules` directory.
 * @param {string} rootDir
 * @returns {string[]}
 */
function loadRules(rootDir) {
  try {
    return fs
      .readdirSync(path.resolve(rootDir, 'rules'))
      .map((filename) => path.resolve(rootDir, 'rules', filename));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}
