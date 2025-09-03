import {loadRules} from '../../lib/helpers.mjs';

export default {
  env: {
    browser: true,
  },
  extends: loadRules(import.meta.url),
  rules: {},
};
