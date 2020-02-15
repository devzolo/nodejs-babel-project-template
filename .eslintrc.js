module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "prettier",
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "max-len": "off"
  },
};
