module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier', 'react'],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  rules: {
    curly: ['warn', 'all'],
    'no-multi-spaces': ['warn', { ignoreEOLComments: false }],
    'prettier/prettier': ['error'],
    'linebreak-style': ['error', 'unix'],
    'newline-after-var': ['warn', 'always'],
    'global-require': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    'no-unreachable': ['warn'],
    'eol-last': ['warn', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-debugger': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 1 }],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'no-console': 0,
    'no-undef': 2,
    'prefer-const': 2,
  },
}
