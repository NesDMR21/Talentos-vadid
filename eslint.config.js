import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // ESLint 9's core scope analyzer does not treat JSX identifiers
      // (e.g. `<App />`) as references to the imported/declared variable
      // (this lands natively only in ESLint 10, see eslint/eslint#20152).
      // Without this rule, every import/component used only in JSX gets
      // flagged as `no-unused-vars`. `jsx-uses-vars` is the standard fix:
      // it marks such variables as used so `no-unused-vars` stays accurate.
      'react/jsx-uses-vars': 'error',
    },
  },
])
