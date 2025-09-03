import common from './configs/common/index.mjs';
import legacy from './configs/legacy/index.mjs';
import modern from './configs/modern/index.mjs';
import node from './configs/node/index.mjs';
import react from './configs/react/index.mjs';
import typescript from './configs/typescript/index.mjs';
import universal from './configs/universal/index.mjs';

export default {
  meta: {
    name: '@ianwremmel/eslint-plugin-ianwremmel',
    version: '1.0.0'
  },
  configs: {
    common,
    legacy,
    modern,
    node,
    react,
    typescript,
    universal,
  },
};
