module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  "ignorePatterns": ["vite.config.ts", "vite-env.d.ts", "test"],
  rules: {
    "@typescript-eslint/space-before-blocks": "off"
  }
}
