import { isObject } from "lodash"
import { invariant, missingArgument } from "@/utilities"

export function createFilter(type) {
  invariant(isObject(type), missingArgument({ type }, `object`))
  return new GqlInput({
    name: `${type._typeConfig.name.toLowerCase()}Filter`,
    description: `Fields by which ${type._typeConfig.name} can be filtered.`,
    fields: () => Object.entries(type._typeConfig.fields(true))
      .filter(([name, values]) => !!values.filter)
      .reduce((hash, [name, values]) => {
        hash[name] = values.filter
        return hash
      }, {})
  })
}
