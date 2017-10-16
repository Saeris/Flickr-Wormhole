import { createFilter, createOrder } from "@/resolvers"

export const Brand = new GqlObject({
  name: `Brand`,
  description: `A Flickr Camera Brand Object.`,
  fields: () => ({
    id: globalId(`Brand`),
    brand: {
      type: GqlID,
      description: `The Barnd's ID.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An Brand id or a list of Brand ids.`
      }
    },
    name: {
      type: GqlString,
      description: `The name of the Brand.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An Brand name or a list of Brand names.`
      }
    }
  })
})

export const BrandFilter = createFilter(Brand)
export const BrandOrder = createOrder(Brand)

export const Queries = {
  brands: {
    type: new GqlList(Brand),
    description: `Gets a list of Camera Brands, used to query for Camera models.`,
    resolve: (parent, args, { brands }) => brands.load(`brands`)
  }
}

export const Definition = Brand

export default { Definition, Queries }
