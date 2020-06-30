module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 'off',
    'import/no-named-as-default': 0,
    'no-restricted-imports': 'off',
    'arrow-body-style': 'off',
    'react/button-has-type': 'off',
    // 'no-console': 'off',
  },
};
