import { createError } from '@/utilities'

export const unknownError = createError(`UnknownError`, {
  message: `An unknown error has occured`
})

export const missingArgument = (argName) => {
  if (ENV === `production`) return `Missing Required Argument`
  if (!!Object.keys(argName)[0] && Object.keys(argName).length === 1) {
    return `Missing Required Argument: '${Object.keys(argName)[0]}' cannot be empty.`
  }
  throw new Error(`Missing Required Argument: Must pass a hash containing a single key.`)
}
