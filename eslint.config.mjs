import willgravinadev from './dist/index.js'

export default willgravinadev(
  {
    project: './tsconfig.json',
    react: true,
    next: true,
    playwright: true,
    testingLibrary: true,
    turbo: true,
    typescript: true,
  },
  {
    ignores: ['eslint.config.bundled_*.mjs'],
  }
)
