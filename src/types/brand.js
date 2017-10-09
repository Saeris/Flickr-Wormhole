import { filters, order } from "@/resolvers"

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

export const BrandFilters = filters(Brand)
export const BrandOrder = order(Brand)

export const Queries = {
  brands: {
    type: new GqlList(Brand),
    description: `Gets a list of Camera Brands, used to query for Camera models.`,
    resolve: (parent, args, { brands }) => brands.load(`brands`)
  }
}

export const Definition = Brand

export default { Definition, Queries }
