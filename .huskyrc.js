/**
 * Husky configuration object
 *
 * @description
 * 🐶 Git hooks made easy
 * @summary
 * **Husky** can prevent bad `git commit`, `git push` and more.
 * This project uses it in confjuction with the package, `lint-staged`.
 *
 * @author typicode
 * @see https://github.com/typicode/husky
*/
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run pre-push'
  }
}
