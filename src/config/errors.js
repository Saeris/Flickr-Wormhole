import { createError } from '@/utilities'

export const unknownError = createError(`UnknownError`, {
  message: `An unknown error has occured`
})
