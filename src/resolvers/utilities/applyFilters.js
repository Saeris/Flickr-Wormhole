import { isBoolean, isNumber, isString, isArray, isObject, isDate } from "lodash"
import { invariant, missingArgument } from "@/utilities"

export function applyFilters(results, args) {
  invariant(isArray(results), missingArgument({ results }, `array`))
  invariant(isObject(args), missingArgument({ args }, `object`))
  let filtered = results

  const withinRange = (rule, res, date = false) => {
    const value = date ? rule?.date?.getTime() : rule?.value
    const min = date ? rule?.startDate?.getTime() : rule?.min
    const max = date ? rule?.endDate?.getTime() : rule?.max
    const { operator } = rule
    if ((!!value && isNumber(value)) && (!!operator && isString(operator))) {
      switch (operator) {
        case `gte`: return res >= value
        case `gt`: return res > value
        case `lt`: return res < value
        case `lte`: return res <= value
        default: return res === value
      }
    }
    if ((!!min && isNumber(min)) && (!!max && isNumber(max))) return res >= min && res <= max
  }

  if (args?.filter) {
    for (const [field, rule] of Object.entries(args.filter)) {
      filtered = results.filter(
        res => (isArray(rule)
          ? rule.includes(res[field])
          : isString(rule) || isBoolean(rule)
            ? res[field] === rule
            : withinRange(rule, res[field], isDate(rule)))
      )
    }
  }

  if (args?.orderBy) {
    const { field, sort } = args.orderBy
    filtered.sort((a, b) => {
      if (isNumber(a[field] && isNumber(b[field]))) return a[field] - b[field]

      if (isDate(a[field]) && isDate(b[field])) return a[field].getTime() - b[field].getTime()

      if (isString(a[field]) && isString(b[field])) {
        const fieldA = a[field].toUpperCase()
        const fieldB = b[field].toUpperCase()
        return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0
      }

      return 0
    })
    if (sort === `desc`) results.reverse()
  }

  return results
}
