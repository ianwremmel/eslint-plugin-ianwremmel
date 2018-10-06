# eslint-plugin-ianwremmel _(@ianwremmel/eslint-plugin-ianwremmel)_

[![license](https://img.shields.io/github/license/ianwremmel/eslint-plugin-ianwremmel)](https://github.com/ianwremmel/eslint-plugin-ianwremmel/blob/master/LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![npm (scoped)](https://img.shields.io/npm/v/@ianwremmel/eslint-plugin-ianwremmel.svg)](https://www.npmjs.com/package/@ianwremmel/eslint-plugin-ianwremmel)
[![npm](https://img.shields.io/npm/dm/@ianwremmel/eslint-plugin-ianwremmel.svg)](https://www.npmjs.com/package/@ianwremmel/eslint-plugin-ianwremmel)

[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/)
[![dependencies Status](https://david-dm.org/ianwremmel/eslint-plugin-ianwremmel/status.svg)](https://david-dm.org/ianwremmel/eslint-plugin-ianwremmel)
[![devDependencies Status](https://david-dm.org/ianwremmel/eslint-plugin-ianwremmel/dev-status.svg)](https://david-dm.org/ianwremmel/eslint-plugin-ianwremmel?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![CircleCI](https://circleci.com/gh/ianwremmel/eslint-plugin-ianwremmel?style=svg)](https://circleci.com/gh/ianwremmel/eslint-plugin-ianwremmel)

> ianwremmel's ESLint preferences for various project types

This is a set of shareable ESLint configs bundled into a single plugin for
easier maintenance and publication.

## Table of Contents

<!-- toc -->

<!-- tocstop -->

## Install

```bash
npm install --save-dev @ianwremmel/eslint-plugin-ianwremmel
```

[ESLint](http://eslint.org/docs/developer-guide/shareable-configs) doesn't
support plugins in shareable configs, so you'll need to run the following script
(borrowed from airbnb) to install the requisite peerDependencies.

```bash
(
  export PKG=@ianwremmel/eslint-plugin-ianwremmel
  npm info "$PKG@latest" peerDependencies --json \
    | command sed 's/[\{\},]//g ; s/: /@/g' \
    | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

-   base: contains the majority of the rules, but targets es5
-   browser: builds on base with browser-specific overrides
-   node: builds on base with node-specific overrides
-   standard: adds es6 and style config to base
-   universal: combines standard, node, and browser (in that order)

In general, you'll want to use standard plus an environment-specific config:

```yml
extends:
    - plugin:@ianwremmel/ianwremmel/standard
    - plugin:@ianwremmel/ianwremmel/node
```

```yml
extends:
    - plugin:@ianwremmel/ianwremmel/standard
    - plugin:@ianwremmel/ianwremmel/browser
```

Though for universal libraries, you can use just `universal`

```yml
extends:
    - plugin:@ianwremmel/ianwremmel/universal
```

## Maintainer

[Ian Remmel](https://github.com/ianwremmel)

## Contribute

PRs generally accepted, but ruleset changes will require a detailed
justification. Please open issues before proposing changes of more than a line
or two.

## License

[MIT](LICENSE) &copy; [Ian W. Remmel](https://github.com/ianwremmel) 2018 until
at least now
