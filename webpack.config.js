const { join } = require(`path`)
const slsw = require(`serverless-webpack`)
const nodeExternals = require(`webpack-node-externals`)
const MinifyPlugin = require(`babel-minify-webpack-plugin`)
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`)
const { DefinePlugin, ProvidePlugin, optimize } = require(`webpack`)
const { ModuleConcatenationPlugin } = optimize

const dotenv = require(`dotenv`)
dotenv.config()

const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || (process.env.NODE_ENV = `development`)
const envDev = ENV === `development`
const envProd = ENV === `production`
//const envTest = ENV === `test`
const srcDir = join(__dirname, `src`)
const npmDir = join(__dirname, `node_modules`)

module.exports = {
  entry: slsw.lib.entries,
  target: `node`,
  externals: [nodeExternals()],
  output: {
    libraryTarget: `commonjs`,
    path: join(__dirname, `.webpack`),
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
  resolve: {
    extensions: [`.js`, `.json`, `.gql`, `.graphql`],
    alias: {
      '@': srcDir
    },
    modules: [
      srcDir,
      npmDir
    ]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: `babel-loader`, options: { forceEnv: ENV } },
      { test: /\.json$/, loader: `json-loader` },
      { test: /\.(graphql|gql)$/, exclude: npmDir, loader: `graphql-tag/loader` }
    ]
  },
  plugins: [
    new DefinePlugin({
      '__DEV__': !envProd,
      'ENV': JSON.stringify(ENV),
      'process.env': {
        ENV: JSON.stringify(ENV),
        NODE_ENV: JSON.stringify(ENV),
        LOGLEVEL: JSON.stringify(process.env.LOGLEVEL),
        FLICKR_API_KEY: JSON.stringify(process.env.FLICKR_API_KEY)
      }
    }),
    new ProvidePlugin({
      // GraphQL
      GqlBool: [`graphql`, `GraphQLBoolean`],
      GqlDate: [`graphql-iso-date`, `GraphQLDate`],
      GqlDateTime: [`graphql-iso-date`, `GraphQLDateTime`],
      GqlEmail: [`graphql-custom-types`, `GraphQLEmail`],
      GqlEnum: [`graphql`, `GraphQLEnumType`],
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
      // Daraloader
      Dataloader: `dataloader`,
      // winston
      log: [`winston`, `log`],
      info: [`winston`, `info`],
      debug: [`winston`, `debug`],
      error: [`winston`, `error`]
    }),
    new LodashModuleReplacementPlugin(),
    new ModuleConcatenationPlugin(),
    new MinifyPlugin({
      keepFnName: envDev,
      keepClassName: envDev,
      booleans: envProd,
      deadcode: true,
      evaluate: envProd,
      flipComparisons: envProd,
      mangle: envProd,
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
