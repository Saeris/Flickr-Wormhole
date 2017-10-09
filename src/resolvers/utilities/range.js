export const Range = new GqlInput({
  name: `Range`,
  fields: () => ({
    value: {
      type: GqlInt,
      description: ``
    },
    min: {
      type: GqlInt,
      description: ``
    },
    max: {
      type: GqlInt,
      description: ``
    },
    operator: {
      type: new GqlEnum({
        name: `RangeOperators`,
        values: {
          gt: {},
          gte: {},
          eq: {},
          lte: {},
          lt: {}
        }
      })
    }
  })
})
