import { invariant } from './invariant'

export const isNullish = value => value === null || value === undefined

export const validateBoolean = (context, value) => {
  invariant(context, `Must pass context to validateBoolean.`)
  const { function: func, parameter } = context
  invariant(func, `Must pass function to context of validateBoolean.`)
  invariant(parameter, `Must pass parameter to context of validateBoolean.`)

  const results = !isNullish(value) && typeof value !== `boolean`
    ? [ `Parameter ${parameter} of ${func} Must be a boolean.` ]
    : [ ]

  return { context, results }
}

export const validateChoices = (context, value) => {
  invariant(context, `Must pass context to validateChoices.`)
  const { function: func, parameter, choices } = context
  invariant(func, `Must pass function to context of validateChoices.`)
  invariant(parameter, `Must pass parameter to context of validateChoices.`)
  invariant(choices, `Must pass choices to context of validateChoices.`)
  invariant(Array.isArray(choices),
    `choices passed to context of validateChoices Must be an array.`)

  const list = choices.map(c => `"${c}"`).join(`, `)
  const results = !isNullish(value) && !choices.includes(value)
    ? [ `Parameter ${parameter} of ${func} must be one of: ${list}.` ]
    : [ ]

  return { context, results }
}

export const validateNumeric = (context, value) => {
  invariant(context, `Must pass context to validateNumeric.`)
  const { function: func, parameter } = context
  invariant(func, `Must pass function to context of validateNumeric.`)
  invariant(parameter, `Must pass parameter to context of validateNumeric.`)

  const results = !isNullish(value) && typeof value !== `number`
    ? [ `Parameter ${parameter} of ${func} must be a number.` ]
    : [ ]

  return { context, results }
}

export const validateRequired = (context, value) => {
  invariant(context, `Must pass context to validateRequired.`)
  const { function: func, parameter } = context
  invariant(func, `Must pass function to context of validateRequired.`)
  invariant(parameter, `Must pass parameter to context of validateRequired.`)

  const results = isNullish(value) || value === ``
    ? [ `Parameter ${parameter} of ${func} is required.` ]
    : [ ]

  return { context, results }
}

export const validateString = (context, value) => {
  invariant(context, `Must pass context to validateString.`)
  const { function: func, parameter } = context
  invariant(func, `Must pass function to context of validateString.`)
  invariant(parameter, `Must pass parameter to context of validateString.`)

  const results = !isNullish(value) && typeof value !== `string`
    ? [ `Parameter ${parameter} of ${func} must be a string.` ]
    : [ ]

  return { context, results }
}

export const validateViewer = (context, viewerType) => {
  invariant(context, `Must pass context to validateViewerId.`)
  const { function: func } = context
  invariant(func, `Must pass function to context of validateViewer.`)

  const results = isNullish(viewerType) || !viewerType
    ? [ `Schema must define @rootViewer for ${func} to be invoked.` ]
    : [ ]

  return { context, results }
}

export const validateViewerId = (context, id) => {
  invariant(context, `Must pass context to validateViewerId.`)
  const { function: func, viewerType } = context
  invariant(func, `Must pass function to context of validateViewerId.`)

  const results = isNullish(viewerType)
    ? [ ]
    : isNullish(id)
      ? [ `Must pass a viewerId to ${func}.` ]
      : !isGlobalId(id)
        ? [ `viewerId passed to ${func} is invalid.` ]
        : typeFromGlobalId(id) !== viewerType
          ? [ `viewerId passed to ${func} must be of type "${viewerType}".` ]
          : [ ]

  return { context, results }
}
