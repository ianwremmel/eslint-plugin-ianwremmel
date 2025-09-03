export default {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    // This is really a bad rule. It encourages makinng code harder to type to
    // avoid an error that should be caugh a bunch of other ways.
    'react/no-unescaped-entities': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
