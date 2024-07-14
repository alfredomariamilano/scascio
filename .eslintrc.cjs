/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['solid', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      extends: [],
      plugins: ['prettier'],
      files: ['**/*.css', '**/*.module.css'],
    },
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    // 'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
  },
}
