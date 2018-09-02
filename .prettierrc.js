'use strict';

module.exports = Object.assign(
  {
    overrides: [
      {
        files: '*.md',
        options: {
          tabWidth: 4
        }
      }
    ]
  },
  require('./src/prettier.json')
);
