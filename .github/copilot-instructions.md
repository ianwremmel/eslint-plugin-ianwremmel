# Copilot Instructions for eslint-plugin-ianwremmel

## Repository Overview

This repository provides **ianwremmel's ESLint preferences for various project
types** as a set of shareable ESLint configs bundled into a single plugin. It's
a Node.js package published to npm as `@ianwremmel/eslint-plugin-ianwremmel`.

**Repository Stats:**

-   Size: Small (~50 files excluding node_modules)
-   Language: JavaScript (Node.js)
-   Runtime: Node.js 16+
-   Package Manager: npm
-   Main file: `src/index.js`

## Build Instructions

### Environment Setup

**Always run these commands in order:**

1. **Install dependencies** (required before any other commands):
    ```bash
    npm ci
    ```
    - Takes ~30-60 seconds
    - Must be run first, always
    - Creates node_modules and installs git hooks via husky

### Available Commands

**Build:**

```bash
npm run build
```

-   Generates README table of contents using markdown-toc
-   Runs prettier formatting on README.md
-   Takes ~5 seconds
-   Safe to run multiple times

**Linting:**

```bash
npm run lint:es        # ESLint only (recommended for development)
npm run lint           # Full lint (includes commitlint)
```

-   Takes ~10-20 seconds

**Testing:**

```bash
npm test
```

-   **Note: This actually just runs `npm run lint`**
-   No traditional unit tests exist
-   Validation is done entirely through linting

**Other useful commands:**

```bash
npm run sync-peer-deps  # Updates peerDependencies based on devDependencies
```

## Project Layout

### Directory Structure

```
src/
├── index.js                 # Main entry point - exports all configs
├── lib/
│   └── helpers.js          # Utility functions (loadRules)
└── configs/                # ESLint configuration modules
    ├── common/             # Base config for all projects
    ├── common-modern/      # ES6+ features
    ├── common-browser/     # Browser environment
    ├── node/              # Node.js projects
    ├── modern/            # Modern browser projects
    ├── legacy/            # Legacy browser projects
    ├── universal/         # Universal (browser + node) projects
    ├── react/             # React projects
    └── typescript/        # TypeScript projects

scripts/
└── sync-peer-deps.js      # Syncs peerDependencies with devDependencies

.github/
├── workflows/
│   └── push.yml           # CI/CD pipeline
└── dependabot.yml         # Dependency update configuration

.husky/                    # Git hooks
├── pre-commit            # Runs lint-staged
└── commit-msg            # Runs commitlint
```

### Configuration Files

-   **`.eslintrc.yml`**: Uses the plugin's own node config
-   **`.prettierrc`**: Code formatting rules
-   **`.markdownlint.json`**: Markdown linting rules
-   **`commitlint.config.js`**: Commit message validation
-   **`package.json`**: Dependencies and scripts

### Architecture

Each config in `src/configs/` follows this pattern:

-   `index.js`: Main config file that may extend other configs
-   `rules/` directory (optional): Individual rule files automatically loaded by
    `loadRules()`

Configs are **composable**:

-   `node` extends `common` + `common-modern`
-   `modern` extends `common` + `common-modern` + `common-browser`
-   `universal` extends `common` + `common-modern` + `common-browser`

### Key Files to Understand

1. **`src/lib/helpers.js`**: Contains `loadRules()` function that auto-loads
   rule files
2. **`src/index.js`**: Exports all available configs
3. **`package.json`**: Contains all build scripts and dependency management

### Commit Message Format

**Critical**: All commit messages MUST follow conventional commits format or CI
will fail:

```
<type>: <description>

[optional body]

[optional footer(s)]
```

### Common Commit Types

-   `feat:` - New features
-   `fix:` - Bug fixes
-   `docs:` - Documentation changes
-   `style:` - Code style changes (formatting, missing semicolons, etc.)
-   `refactor:` - Code refactoring without feature changes
-   `test:` - Adding or updating tests
-   `chore:` - Maintenance tasks, dependency updates
-   `ci:` - CI/CD pipeline changes
-   `perf:` - Performance improvements

### Pre-commit Checks

Git hooks via husky automatically run:

1. **lint-staged**: Lints staged JavaScript files
2. **README.md check**: Ensures no unstaged changes to README
3. **README TOC generation**: Updates table of contents if README is staged

### CI/CD (GitHub Actions)

The `.github/workflows/push.yml` runs on every push:

1. **Fixup commit prevention**: Prevents accidental fixup commits
2. **Nopush commit prevention**: Prevents commits marked with [nopush]
3. **Lint**: Runs `npm run lint`
4. **Test**: Runs `npm run test`
5. **Release**: Automated semantic-release to npm (on success)

**Workflow timing**: Each job has 10-minute timeout

### Available Configs

The plugin exports these shareable configs:

-   `plugin:@ianwremmel/ianwremmel/common`: Base config
-   `plugin:@ianwremmel/ianwremmel/node`: Node.js projects
-   `plugin:@ianwremmel/ianwremmel/modern`: Modern browser projects
-   `plugin:@ianwremmel/ianwremmel/legacy`: Legacy browser projects
-   `plugin:@ianwremmel/ianwremmel/universal`: Universal projects
-   `plugin:@ianwremmel/ianwremmel/react`: React projects
-   `plugin:@ianwremmel/ianwremmel/typescript`: TypeScript projects

## Making Changes

### Adding New Rules

1. Navigate to appropriate config directory (e.g., `src/configs/common/`)
2. Add rule files to `rules/` directory or modify existing ones
3. Rules are automatically loaded via `loadRules()` helper
4. Test with `npm run lint:es`

### Adding New Configs

1. Create new directory under `src/configs/`
2. Add `index.js` that exports ESLint config object
3. Update `src/index.js` to export the new config
4. Test integration

### Modifying Dependencies

1. Update `package.json` devDependencies
2. Run `npm run sync-peer-deps` to update peerDependencies
3. Test with fresh install:
   `rm -rf node_modules package-lock.json && npm install`

## Trust These Instructions

These instructions are comprehensive and validated. Only perform additional
exploration if:

-   Commands fail unexpectedly
-   Information appears outdated
-   You need to understand implementation details not covered here

The build process is straightforward: install dependencies, then use the npm
scripts for all operations. The linting-as-testing approach means successful
linting validates the entire codebase.
