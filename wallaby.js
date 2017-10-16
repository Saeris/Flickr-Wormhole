module.exports = wallaby => ({
  files: [`src/**/*.js`, `!src/**/__TEST__/*.spec.js`],

  tests: [`src/**/__TEST__/*.spec.js`],

  testFramework: `ava`,

  env: {
    type: `node`,
    runner: `node`,
    params: {}
  },

  debug: true,

  setup: () => {
    require(`dotenv`).config()
    require(`isomorphic-fetch`)
    require(`babel-register`)
    require(`babel-polyfill`)
  },

  compilers: {
    "src/**/*.js": wallaby.compilers.babel()
  }
})
