module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
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
    // @NOTE: Too puristic
    '@typescript-eslint/ban-types': ['off'], // @TODO: Disable only baning {}
    '@typescript-eslint/no-namespace': ['off'],
    'func-names': ['off'],
    // @NOTE: We decided against prop validations
    'react/prop-types': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],

    'import/extensions': ['off'],
    'max-len': ['error', 240],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'arrow-body-style': ['off'],
    'no-use-before-define': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/destructuring-assignment': ['off'],

    // @NOTE: fixes TypeScript enum bug
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    'no-shadow': ['off'],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    'no-param-reassign': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children: { when: 'never' },
      },
    ],
    'react/require-default-props': ['off'],
  },
};
