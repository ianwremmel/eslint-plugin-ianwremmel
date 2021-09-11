'use strict';

const {promises: fs} = require('fs');
const path = require('path');

(async () => {
  try {
    const packagePath = path.resolve(__dirname, '..', 'package.json');
    const pkg = JSON.parse(await fs.readFile(packagePath, 'utf-8'));
    const otherPeers = ['prettier', 'typescript'];
    const peerDeps = {};
    for (const [name, version] of Object.entries(pkg.devDependencies)) {
      if (name.includes('eslint') || otherPeers.includes(name)) {
        peerDeps[name] = `>=${version.replace(/^\^/, '').replace(/^~/, '')}`;
      }
    }
    pkg.peerDependencies = peerDeps;
    await fs.writeFile(packagePath, `${JSON.stringify(pkg, null, 2)}\n`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
