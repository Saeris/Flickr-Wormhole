import { invariant, missingArgument, isNumber, isString, isArray, isObject } from "@/utilities"

export function applyFilters(results, args) {
  invariant(isObject(results, true), missingArgument({ results }, `object`))
  invariant(isObject(args, true), missingArgument({ args }, `object`))

  const withinRange = (rule, res) => {
    const { value, min, max, operator } = rule
    info(`Evaluation if results is within range:`, rule, res)
    if (!!value && !!operator) {
      switch (operator) {
        case `gte`: return res >= value
        case `gt`: return res > value
        case `lt`: return res < value
        case `lte`: return res <= value
        default: return res === value
      }
    }
    if (!!min && !!max) return res >= min && res <= max
  }

  if (!!args.filter) {
    for (const [field, rule] of Object.entries(args.filter)) {
      results = results.filter(
        res => isArray(rule)
          ? rule.includes(res[field])
          : isString(rule) ? res[field] === rule : withinRange(rule, res[field])
      )
    }
  }

  if (!!args.orderBy) {
    const { field, sort } = args.orderBy
    results.sort((a, b) => {
      if (isNumber(a[field] && isNumber(b[field]))) sort === `asc` ? a[field] - b[field] : b[field] - a[field]

      if (isString(a[field]) && isString(b[field])) {
        const fieldA = a[field].toUpperCase()
        const fieldB = b[field].toUpperCase()
        if (sort === `asc`) return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0
        return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0
      }
    })
  }

  return results
}
