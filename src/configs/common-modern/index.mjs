import {loadRules} from '../../lib/helpers.mjs';

export default {
  env: {
    es6: true,
  },
  extends: loadRules(import.meta.url),
  globals: {
    // this is here to specifically allow process.env without marking this as a
    // node-like environment
    process: false,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },
};
