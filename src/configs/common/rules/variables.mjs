

export default {
  rules: {
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
  },
};
