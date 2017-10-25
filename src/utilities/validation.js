// @flow
const production: boolean = process.env.NODE_ENV === `production`

export function invariant(condition: boolean, message: string): boolean {
  if (!production && typeof message !== `string`) throw new Error(`invariant(...): Second argument must be a string.`)
  if (!condition) {
    let err = production
      ? new Error(`An error has occured. For more information please switch to a development build.`)
      : new Error(message)
    err.name = `Invariant Violation`
    throw err
  }
  return true
}

export function missingArgument<ArgName>(argName: ArgName, type?: string): string {
  invariant(
    !!argName && typeof argName === `object` && Object.keys(argName).length === 1,
    `Missing Required Argument: Must pass a hash containing a single key.`
  )
  if (!!type && typeof type !== `string` && type.match(/^(boolean|number|string|symbol|array|function|object)$/)) {
    throw new Error(
      `Optional argument 'Type' must be a string with one of these values: boolean, number, string, symbol, array, function, or object`
    )
  }
  if (ENV === `production`) return `Missing Required Argument`
  return `Missing Required Argument: '${Object.keys(argName)[0]}' cannot be empty.${!!type &&
    ` Expected a value of type: ${type}`}`
}
