import { invariant, missingArgument, isObject } from "@/utilities"

export function filters(type) {
  invariant(isObject(type, true), missingArgument({ type }, `object`))
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
