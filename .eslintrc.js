const format = require('prettier-eslint')

var restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
]

module.exports = {
  root: true,

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser
   *
   * @description
   * A wrapper around the Babel parser that makes it compatible with ESLint.
   */
  parser: 'babel-eslint',

  /**
   * @see https://eslint.org/docs/user-guide/configuring#configuring-plugins
   *
   * @description
   * ESLint supports the use of third-party plugins.
   * Before using the plugin you have to install it using npm.
   */
  plugins: ['prettier', 'import'],

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
   *
   * @description
   * An environment defines global variables that are predefined.
   */
  env: {
    /**
     * @description
     * browser global variables
     */
    browser: true,
    /**
     * @description
     * CommonJS global variables and CommonJS scoping
     * (use this for browser-only code that uses Browserify/WebPack).
     */
    commonjs: true,
    /**
     * @description
     * Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
     */
    es6: true,
    /**
     * @description
     * Jest global variables.
     */
    jest: true,
    /**
     * @description
     * Node.js global variables and Node.js scoping.
     */
    node: true,
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
   */
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-globals
   *
   * @description
   * Prevent errors for webpack's `DefinePlugin` method when declaring
   * global constants.  Note: in this application, it is declared via
   * the `webpack.parts` file with the method `setFreeVariable`
   */
  globals: {},

  /**
   * @see http://eslint.org/docs/rules/
   * @see https://eslint.org/docs/user-guide/configuring#configuring-rules
   *
   * @description
   * ESLint comes with a large number of rules. You can modify which rules
   * your project uses either using configuration comments or configuration files.
   *
   * To change a rule setting, you must set the rule ID equal to one of these values:
   * - "off" or `0`   - turn the rule off
   * - "warn" or `1`  - turn the rule on as a warning (doesn’t affect exit code)
   * - "error" or `2` - turn the rule on as an error (exit code is 1 when triggered)
   *
   */
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all', // none, es5, all
        bracketSpacing: true,
      },
    ],
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    // eqeqeq: ['warn', 'allow-null'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      },
    ],

    /**
     * @see https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     *
     * @description
     * This plugin intends to support linting of ES2015+ (ES6+) import/export syntax,
     * and prevent issues with misspelling of file paths and import names.
     * All the goodness that the ES2015+ static module syntax intends to provide,
     * marked up in your editor.
     */
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
  },
}
