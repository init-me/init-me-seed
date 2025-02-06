import yylReactConfig from 'eslint-config-yyl-react'
/** @type {import('eslint').Linter.Config[]} */
export default [
  ...yylReactConfig,
  {
    ignores: ['node_modules/*', 'output/*', 'test/*']
  },
  {
    languageOptions: {
      globals: {
        process: true,
        require: true
      }
    },
    rules: {}
  }
]
