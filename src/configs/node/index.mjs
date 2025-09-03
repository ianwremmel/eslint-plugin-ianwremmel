import {loadRules} from '../../lib/helpers.mjs';
import {fileURLToPath} from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  env: {
    node: true,
  },
  extends: [
    path.resolve(__dirname, '../common/index.mjs'),
    path.resolve(__dirname, '../common-modern/index.mjs')
  ].concat(loadRules(import.meta.url)),
};
