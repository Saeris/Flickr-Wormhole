import { loadBrands } from "./loaders"

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
  getBrands: {
    type: new GqlList(Brand),
    resolve: (parent, args, context) => loadBrands.load(`brands`)
  }
}

export const Definition = Brand

export default { Definition, Queries }
