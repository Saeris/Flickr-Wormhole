const production = process.env.NODE_ENV === `production` ? true : false

export const invariant = (condition, message) => {
  if (!production) {
    if (message === undefined) throw new Error(`invariant(...): Second argument must be a string.`)
  }
  if (!condition) {
    let err = production
      ? new Error(`An error has occured. For more information please switch to a development build.`)
      : new Error(message)
    err.name = `Invariant Violation`
    throw err
  }
  return true
}

export const missingArgument = (argName) => {
  if (ENV === `production`) return `Missing Required Argument`
  if (!!Object.keys(argName)[0] && Object.keys(argName).length === 1) {
    return `Missing Required Argument: '${Object.keys(argName)[0]}' cannot be empty.`
  }
  throw new Error(`Missing Required Argument: Must pass a hash containing a single key.`)
}
