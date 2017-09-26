const { join } = require(`path`)

const srcDir = join(__dirname, `src`)

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "browser": true
  },
  "extends": [
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "compat",
    "react",
    "flowtype",
    "import",
    "promise"
  ],
  "settings": {
    "flowtype": { "onlyFilesWithFlowAnnotation": false },
    "polyfills": ["fetch", "Promise"],
    "import/resolver": {
      "webpack": {
        "config": {
          "resolve": {
            "alias": {
              // Application Aliases
              '@': srcDir,
              // Module Aliases
              react: `preact-compat/dist/preact-compat`,
              'react-dom': `preact-compat/dist/preact-compat`,
              'create-react-class': `preact-compat/lib/create-react-class`,
              'react-addons-css-transition-group': `preact-css-transition-group`
            },
            "modules": [
              "node_modules",
              "src"
            ]
          }
        }
      }
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "arrowFunctions": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": false,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": false,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "jsx": true
    }
  },
  "rules": {
    "strict"                                    : [2, "never"],

    "no-var"                                    : 2,
    "prefer-const"                              : 0,

    "no-shadow"                                 : 2,
    "no-shadow-restricted-names"                : 2,
    "no-unused-vars"                            : [2, { "vars": "local", "args": "none", "argsIgnorePattern": "^_" }],
    "no-use-before-define"                      : 0,

    "comma-dangle"                              : [2, "never"],
    "no-cond-assign"                            : [2, "always"],
    "no-debugger"                               : 1,
    "no-alert"                                  : 1,
    "no-constant-condition"                     : 1,
    "no-dupe-keys"                              : 2,
    "no-duplicate-case"                         : 2,
    "no-empty"                                  : 2,
    "no-ex-assign"                              : 2,
    "no-extra-boolean-cast"                     : 0,
    "no-extra-semi"                             : 2,
    "no-func-assign"                            : 2,
    "no-inner-declarations"                     : 2,
    "no-invalid-regexp"                         : 2,
    "no-irregular-whitespace"                   : 2,
    "no-obj-calls"                              : 2,
    "no-sparse-arrays"                          : 2,
    "no-unreachable"                            : 2,
    "use-isnan"                                 : 2,
    "block-scoped-var"                          : 0,

    "consistent-return"                         : 0,
    "curly"                                     : [2, "multi-line"],
    "default-case"                              : 2,
    "dot-notation"                              : [2, { "allowKeywords": true }],
    "eqeqeq"                                    : 2,
    "guard-for-in"                              : 0,
    "no-caller"                                 : 2,
    "no-else-return"                            : 2,
    "no-eq-null"                                : 2,
    "no-eval"                                   : 2,
    "no-extend-native"                          : 2,
    "no-extra-bind"                             : 2,
    "no-fallthrough"                            : 2,
    "no-floating-decimal"                       : 2,
    "no-implied-eval"                           : 2,
    "no-lone-blocks"                            : 2,
    "no-loop-func"                              : 2,
    "no-multi-str"                              : 2,
    "no-native-reassign"                        : 2,
    "no-new"                                    : 2,
    "no-new-func"                               : 2,
    "no-new-wrappers"                           : 2,
    "no-octal"                                  : 2,
    "no-octal-escape"                           : 2,
    "no-param-reassign"                         : 0,
    "no-proto"                                  : 2,
    "no-redeclare"                              : 2,
    "no-script-url"                             : 2,
    "no-self-compare"                           : 2,
    "no-sequences"                              : 2,
    "no-throw-literal"                          : 2,
    "no-with"                                   : 2,
    "radix"                                     : 2,
    "vars-on-top"                               : 2,
    "wrap-iife"                                 : [2, "any"],
    "yoda"                                      : 2,

    "indent"                                    : [2, 2, { "SwitchCase": 1 }],
    "brace-style"                               : [2, "1tbs", { "allowSingleLine": true }],
    "quotes"                                    : [2, "backtick", "avoid-escape"],
    "camelcase"                                 : [2, { "properties": "never" }],
    "comma-spacing"                             : [2, { "before": false, "after": true }],
    "comma-style"                               : [2, "last"],
    "operator-linebreak"                        : [2, "before", { "overrides": { "&&": "ignore" } }],
    "multiline-ternary"                         : [2, "always-multiline"],
    "eol-last"                                  : 2,
    "func-names"                                : 0,
    "new-cap"                                   : [2, { "newIsCap": true }],
    "no-multiple-empty-lines"                   : [2, { "max": 2 }],
    "no-new-object"                             : 2,
    "no-spaced-func"                            : 2,
    "no-trailing-spaces"                        : 2,
    "no-extra-parens"                           : [2, "functions"],
    "no-underscore-dangle"                      : 0,
    "one-var"                                   : [2, "never"],
    "padded-blocks"                             : [2, "never"],
    "semi"                                      : [2, "never"],
    "semi-spacing"                              : [2, { "before": false, "after": true }],
    "keyword-spacing"                           : [2, { "before": true, "after": true }],
    "space-before-blocks"                       : 2,
    "space-before-function-paren"               : [2, "never"],
    "space-infix-ops"                           : 2,
    "spaced-comment"                            : [0, "always", { "plugins": ["react"], "exceptions": ["*"], "markers": ["*"] }],
    "prefer-arrow-callback"                     : 2,
    "arrow-body-style"                          : [2, "as-needed"],
    "arrow-parens"                              : [2, "as-needed", { "requireForBlockBody": true }],

    "compat/compat"                             : 2,

    "react/no-deprecated"                       : 2,
    "react/jsx-uses-react"                      : 2,
    "react/jsx-uses-vars"                       : 2,

    "import/no-unresolved"                      : [2, { "commonjs": true, "amd": true }],
    "import/named"                              : 2,
    "import/default"                            : 2,
    "import/no-webpack-loader-syntax"           : 2,
    "import/export"                             : 2,
    "import/no-deprecated"                      : 2,
    "import/no-mutable-exports"                 : 2,
    "import/no-duplicates"                      : 2,
    "import/no-namespace"                       : 2,
    "import/newline-after-import"               : 2,
    "import/order"                              : [2, { "newlines-between": "never", "groups": ["builtin", ["internal", "external"], ["parent", "sibling"], "index"] }],

    "promise/catch-or-return"                   : [2, { "terminationMethod": ["catch", "finally"] }],
    "promise/always-return"                     : 2,
    "promise/no-return-wrap"                    : 2,
    "promise/param-names"                       : 2,
    "promise/prefer-await-to-then"              : 2,
    "promise/prefer-await-to-callbacks"         : 2,

    "flowtype/boolean-style"                    : [2, "boolean"],
    "flowtype/define-flow-type"                 : 1,
    "flowtype/delimiter-dangle"                 : 0,
    "flowtype/generic-spacing"                  : [2, "never"],
    "flowtype/no-types-missing-file-annotation" : 2,
    "flowtype/no-weak-types"                    : 0,
    "flowtype/require-parameter-type"           : 0,
    "flowtype/require-return-type"              : 0,
    "flowtype/require-valid-file-annotation"    : 0,
    "flowtype/semi"                             : 0,
    "flowtype/space-after-type-colon"           : [2, "always"],
    "flowtype/space-before-generic-bracket"     : [2, "never"],
    "flowtype/space-before-type-colon"          : [2, "never"],
    "flowtype/type-id-match"                    : 0,
    "flowtype/union-intersection-spacing"       : [2, "always"],
    "flowtype/use-flow-type"                    : 1,
    "flowtype/valid-syntax"                     : 1
  }
}
