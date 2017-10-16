const { join } = require(`path`)
const slsw = require(`serverless-webpack`) // https://github.com/serverless-heaven/serverless-webpack
const nodeExternals = require(`webpack-node-externals`) // https://github.com/liady/webpack-node-externals
const MinifyPlugin = require(`babel-minify-webpack-plugin`) // https://github.com/webpack-contrib/babel-minify-webpack-plugin
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`) // https://github.com/lodash/lodash-webpack-plugin
const { optimize } = require(`webpack`)
const { ModuleConcatenationPlugin } = optimize

const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || (process.env.NODE_ENV = `development`)
//const envDev = ENV === `development`
const envProd = ENV === `production`
//const envTest = ENV === `test`
const srcDir = join(__dirname, `src`)
const outDir = join(__dirname, `dist`)
const npmDir = join(__dirname, `node_modules`)

module.exports = {
  entry: slsw.lib.entries,
  target: `node`,
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
  ],
  output: {
    libraryTarget: `commonjs`,
    path: outDir,
    filename: `[name].js`
  },
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  },
  performance: {
    hints: false
  },
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    extensions: [`.js`, `.json`, `.gql`, `.graphql`],
    alias: {
      '@': srcDir
    }
  },
  module: {
    rules: [
      { test: /\.js$/, loader: `babel-loader`, exclude: npmDir },
      { test: /\.json$/, loader: `json-loader` },
      { test: /\.(graphql|gql)$/, exclude: npmDir, loader: `graphql-tag/loader` }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    // https://webpack.js.org/plugins/module-concatenation-plugin/
    new ModuleConcatenationPlugin(),
    // https://github.com/babel/minify/tree/master/packages/babel-preset-minify#options
    new MinifyPlugin({
      keepFnName: true,
      keepClassName: true,
      booleans: envProd,
      deadcode: true,
      evaluate: envProd,
      flipComparisons: envProd,
      mangle: false,
      memberExpressions: envProd,
      mergeVars: envProd,
      numericLiterals: envProd,
      propertyLiterals: envProd,
      removeConsole: envProd,
      removeDebugger: envProd,
      simplify: envProd,
      simplifyComparisons: envProd,
      typeConstructors: envProd,
      undefinedToVoid: envProd
    })
  ]
}
