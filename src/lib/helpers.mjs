import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export {loadRules};

/**
 * Loads all of the rule configs in the specified rootDir's `rules` directory.
 * @param {string} rootUrl - Can be import.meta.url or a directory path
 * @returns {string[]}
 */
function loadRules(rootUrl) {
  let rootDir;
  if (rootUrl.startsWith('file://')) {
    // Convert file:// URL to directory path
    rootDir = path.dirname(fileURLToPath(rootUrl));
  } else {
    // Assume it's already a directory path
    rootDir = rootUrl;
  }
  
  try {
    return fs
      .readdirSync(path.resolve(rootDir, 'rules'))
      .filter(filename => filename.endsWith('.mjs'))
      .map((filename) => path.resolve(rootDir, 'rules', filename));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}
