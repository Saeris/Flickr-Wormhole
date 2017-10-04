const { join } = require(`path`)
const slsw = require(`serverless-webpack`) // https://github.com/serverless-heaven/serverless-webpack
const nodeExternals = require(`webpack-node-externals`) // https://github.com/liady/webpack-node-externals
const MinifyPlugin = require(`babel-minify-webpack-plugin`) // https://github.com/webpack-contrib/babel-minify-webpack-plugin
const { DefinePlugin, ProvidePlugin, optimize } = require(`webpack`)
const { ModuleConcatenationPlugin } = optimize

const dotenv = require(`dotenv`)
dotenv.config()

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
  externals: [nodeExternals({
    modulesFromFile: true
  })],
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
      { test: /\.js$/, loader: `babel-loader`, exclude: npmDir, options: {
        plugins: [
          // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-optional-chaining
          // https://github.com/tc39/proposal-optional-chaining
          `transform-optional-chaining`,
          `transform-object-rest-spread`,
          `transform-es2015-shorthand-properties`
        ],
        presets: [
          [`env`, {
            targets: { node: `6.10` },
            useBuiltIns: `usage`
          }],
          `stage-0`,
          `flow`
        ]
      } },
      { test: /\.json$/, loader: `json-loader` },
      { test: /\.(graphql|gql)$/, exclude: npmDir, loader: `graphql-tag/loader` }
    ]
  },
  plugins: [
    // https://webpack.js.org/plugins/define-plugin/
    new DefinePlugin({
      '__DEV__': !envProd,
      'ENV': JSON.stringify(ENV),
      LOGLEVEL: JSON.stringify(process.env.LOGLEVEL),
      FLICKR_API_KEY: JSON.stringify(process.env.FLICKR_API_KEY)
    }),
    // https://webpack.js.org/plugins/provide-plugin/
    new ProvidePlugin({
      // GraphQL
      // https://github.com/graphql/graphql-js
      // https://github.com/excitement-engineer/graphql-iso-date
      // https://github.com/stylesuxx/graphql-custom-types
      // https://github.com/graphql/graphql-relay-js
      // http://graphql.org/blog/rest-api-graphql-wrapper/#bonus-round-a-truly-relay-compliant-schema
      GqlBool: [`graphql`, `GraphQLBoolean`],
      GqlDate: [`graphql-iso-date`, `GraphQLDate`],
      GqlDateTime: [`graphql-iso-date`, `GraphQLDateTime`],
      GqlEmail: [`graphql-custom-types`, `GraphQLEmail`],
      GqlEnum: [`graphql`, `GraphQLEnumType`],
      GqlError: [`graphql`, `GraphQLError`],
      GqlFloat: [`graphql`, `GraphQLFloat`],
      GqlID: [`graphql`, `GraphQLID`],
      GqlInput: [`graphql`, `GraphQLInputObjectType`],
      GqlInt: [`graphql`, `GraphQLInt`],
      GqlInterface: [`graphql`, `GraphQLInterfaceType`],
      GqlList: [`graphql`, `GraphQLList`],
      GqlNonNull: [`graphql`, `GraphQLNonNull`],
      GqlObject: [`graphql`, `GraphQLObjectType`],
      GqlScalar: [`graphql`, `GraphQLScalarType`],
      GqlSchema: [`graphql`, `GraphQLSchema`],
      GqlString: [`graphql`, `GraphQLString`],
      GqlTime: [`graphql-iso-date`, `GraphQLTime`],
      GqlUnion: [`graphql`, `GraphQLUnion`],
      GqlURL: [`graphql-custom-types`, `GraphQLURL`],
      globalId: [`graphql-relay`, `globalIdField`],
      toGlobalId: [`graphql-relay`, `toGlobalId`],
      fromGlobalId: [`graphql-relay`, `fromGlobalId`],
      // Daraloader
      // https://github.com/facebook/dataloader
      // http://dev.apollodata.com/tools/graphql-tools/connectors.html#One-dataloader-per-request
      Dataloader: `dataloader`,
      // Winston
      log: [`winston`, `log`],
      info: [`winston`, `info`],
      debug: [`winston`, `debug`],
      error: [`winston`, `error`]
    }),
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
