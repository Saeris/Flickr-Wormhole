// https://github.com/bjyoungblood/es6-error
export class ExtendableError extends Error {
  constructor(message = ``) {
    super(message)

    Object.defineProperty(this, `message`, {
      configurable: true,
      enumerable : false,
      value : message,
      writable : true
    })

    Object.defineProperty(this, `name`, {
      configurable: true,
      enumerable : false,
      value : this.constructor.name,
      writable : true
    })

    if (Error.hasOwnProperty(`captureStackTrace`)) { // eslint-disable-line
      Error.captureStackTrace(this, this.constructor)
      return
    }

    Object.defineProperty(this, `stack`, {
      configurable: true,
      enumerable : false,
      value : (new Error(message)).stack,
      writable : true
    })
  }
}

// https://github.com/thebigredgeek/apollo-errors
export class ApolloError extends ExtendableError {
  constructor(name, { message, timeThrown = (new Date()).toISOString(), data = {}, options = {} }) {
    const m = !!message || message
    const opts = Object.assign({}, options, (!!options || {}))
    super(m)

    this.name = name
    this.message = m
    this.time_thrown = !!timeThrown || timeThrown
    this.data = Object.assign({}, data, (!!data || {}))
    this.showLocations = !!opts.showLocations
  }

  serialize() {
    const { name, message, time_thrown, data, showLocations, path, locations } = this

    let error = { message, name, time_thrown, data }

    if (showLocations) {
      error.locations = locations
      error.path = path
    }

    return error
  }
}

export const isInstance = e => e instanceof ApolloError

export const createError = (name, { message = `An error has occurred`, options }) =>
  ApolloError.bind(null, name, { message, options })

export const formatError = (error, returnNull = false) => {
  const originalError = error ? error.originalError || error : null

  if (!originalError) return returnNull ? null : error

  if (!originalError.name || !isInstance(originalError)) return returnNull ? null : error

  if (originalError.showLocations) {
    originalError.locations = error.locations
    originalError.path = error.path
  }

  return originalError.serialize()
}
