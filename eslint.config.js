import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js, prettier: pluginPrettier },
    extends: ['js/recommended', 'plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting as ESLint errors
      semi: 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      'no-extra-semi': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Disable conflicting ESLint rules
])
