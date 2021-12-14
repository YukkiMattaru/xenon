module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-namespace': ['off'],

    'import/extensions': ['off'],
    'react/function-component-definition': ['off'],
    'react/prop-types': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'arrow-body-style': ['off'],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-param-reassign': ['warn'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
};
