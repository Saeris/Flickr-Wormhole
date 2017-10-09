const production = process.env.NODE_ENV === `production` ? true : false

export function invariant(condition, message) {
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

export function missingArgument(argName, type) {
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

export const isNullish = value => value === null || value === undefined

export const isBoolean = (value) => {
  invariant(!isNullish(value), `Must pass value to isBoolean in order to validate.`)
  return typeof value === `boolean`
}

export const isNumber = (value) => {
  invariant(!isNullish(value), `Must pass value to isNumber in order to validate.`)
  return typeof value === `number`
}

export const isString = (value, checkEmpty = false) => {
  invariant(!isNullish(value), `Must pass value to isString in order to validate.`)
  if (!!checkEmpty) invariant(isBoolean(checkEmpty), `Optional Argument: checkEmpty must be a boolean.`)
  return typeof value === `string` && checkEmpty
    ? true
    : !!value.length
}

export const isSymbol = (value) => {
  invariant(!isNullish(value), `Must pass value to isSymbol in order to validate.`)
  return typeof value === `symbol`
}

export const isArray = (value, checkEmpty = false) => {
  invariant(!isNullish(value), `Must pass value to isArray in order to validate.`)
  if (!!checkEmpty) invariant(isBoolean(checkEmpty), `Optional Argument: checkEmpty must be a boolean.`)
  return Array.isArray(value) && checkEmpty ? true : value.length
}

export const isFunction = (value) => {
  invariant(!isNullish(value), `Must pass value to isFunction in order to validate.`)
  return typeof value === `function`
}

export const isObject = (value, checkEmpty = false) => {
  invariant(!isNullish(value), `Must pass value to isObject in order to validate.`)
  if (!!checkEmpty) invariant(isBoolean(checkEmpty), `Optional Argument: checkEmpty must be a boolean.`)
  const isEmpty = (obj) => {
    for (const key in obj) if (obj.hasOwnProperty(key)) return false
    return true
  }
  return typeof value === `object` && checkEmpty ? true : isEmpty(value)
}
