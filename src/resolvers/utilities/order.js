import { invariant, missingArgument, isObject } from "@/utilities"

const Sort = new GqlEnum({
  name: `Sort`,
  description: `Sort options for OrderBy`,
  values: {
    asc: {},
    desc: {}
  }
})

export function order(type) {
  invariant(isObject(type, true), missingArgument({ type }, `object`))
  const FieldsEnum = new GqlEnum({
    name: `${type._typeConfig.name.toLowerCase()}OrderByFields`,
    description: `A list of field names that this type can be ordered by.`,
    values: Object.entries(type._typeConfig.fields(true))
      .filter(([name, values]) => !!values.sortable)
      .reduce((hash, [name, values]) => {
        hash[`${name}`] = {}
        return hash
      }, {})
  })

  return new GqlInput({
    name: `${type._typeConfig.name.toLowerCase()}OrderBy`,
    description: `Sorts the results ordered by the selected field.`,
    fields: () => ({
      field: {
        type: new GqlNonNull(FieldsEnum),
        description: `The field by which to sort the results. (Required)`
      },
      sort: {
        type: Sort,
        defaultValue: `asc`,
        description: `The direction by which to sort the results. (Optional, defaults to ascending)`
      }
    })
  })
}
