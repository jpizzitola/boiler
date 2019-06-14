/**
 * Lint-staged configuration object
 *
 * @description
 * Run linters against staged git files and don't let 💩 slip into your code base!
 *
 * @author okonet
 * @see https://github.com/okonet/lint-staged
 * @tutorial https://blog.fossasia.org/integrate-prettier-with-lint-staged-and-eslint-for-consistent-code-style-throughout-the-project/
 */
module.exports = {
  linters: {
    // Markdown files compliant with:

    /**
     * Markdown formatters
     *
     * @description
     * Formats any _markdown_ files found at the project-root using the
     * popular formatter, [Prettier](https://prettier.io/).
     * The formatting originates from [CommonMark](https://commonmark.org/).
     *
     * @see https://prettier.io/blog/2017/11/07/1.8.0.html#markdown-support
     * @see https://commonmark.org/
     */
    '*.md': [
      // Run prettier on the markdown files
      'prettier --write "*.md"',
      'git add',
    ],
    // Source files
    'src/**/*.js': [
      'eslint --fix',
      'prettier --config ./.prettierrc.js --write "src/**/*.js"',
      'git add',
    ],
  },
}
