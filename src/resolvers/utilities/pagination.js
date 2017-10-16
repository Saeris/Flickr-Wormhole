import { isNumber } from "lodash"
import { invariant, missingArgument } from "@/utilities"

// TODO: This function really needs tests written for it to ensure it's working correctly.
// For now it seems first and last work, but they need to be capped and short-circuited if
// they exceed the total number of items retrieveable. They may also not work with values
// exceeding the maximum perPage value of the individual REST functions they're sent to.
// They also need to work with a provided offset and if possible, next and previous should be
// added as well. Count appears to work for now, but out of the three is most likely to be broken.
// Testing on live data is not recommended unless the sample set has sequentaly incrementing identifiers.
// Overall, providing a generic pagination interface for a REST API is difficult at best.
export function pagination({ first = 0, last = 0, count = 0, offset = 0, total = 0 } = {}) {
  invariant(isNumber(first) || isNumber(last) || isNumber(count), `Please set either 'first', 'last', or 'count'.`)
  invariant(isNumber(total), missingArgument({ total }, `number`))
  isNumber(offset)
  const minPerPage = (totalItems, minLimit) => {
    if (totalItems === minLimit) return minLimit
    let perPage = minLimit
    while (totalItems % perPage !== 0) {
      perPage++
    }
    return perPage
  }
  if (first) {
    const perPage = first
    const start = 1
    const skip = 0
    info(`Fetching first ${first} results...`, { start, perPage, skip })
    return { start, perPage, skip }
  }
  if (last && total) {
    const cursor = total - last
    const perPage = minPerPage(total, last)
    const start = Math.ceil(cursor / perPage) || 1
    const skip = cursor % perPage || 0
    info(`Fetching last ${last} results...`, { start, perPage, skip })
    return { start, perPage, skip }
  }
  if (count) {
    const perPage = offset > count ? minPerPage(offset, count) : count
    const start = offset > count ? Math.ceil(offset / perPage) : 1
    const skip = perPage - count <= 0 ? 0 : perPage - count || 0
    info(`Fetching ${count} results...`, { start, perPage, skip })
    return { start, perPage, skip }
  }
  return {}
}
