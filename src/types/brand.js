export const Brand = new GqlObject({
  name: `Brand`,
  description: `A Flickr Camera Brand Object.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The Barnd's ID.`
    },
    name: {
      type: GqlString,
      description: `The name of the Brand.`
    }
  })
})

export const Queries = {
  brands: {
    type: new GqlList(Brand),
    description: `Gets a list of Camera Brands, used to query for Camera models.`,
    resolve: (parent, args, { brands }) => brands.load(`brands`)
  }
}

export const Definition = Brand

export default { Definition, Queries }
