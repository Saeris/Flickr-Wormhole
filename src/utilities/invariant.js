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
