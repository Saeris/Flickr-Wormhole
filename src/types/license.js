import { createFilter, createOrder } from "@/resolvers"

export const License = new GqlObject({
  name: `License`,
  description: `A Flickr License Description`,
  fields: () => ({
    id: globalId(`License`),
    licenseId: {
      type: GqlID,
      description: `The License' ID.`
    },
    name: {
      type: GqlString,
      description: `The name of the License.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A license name or list of license names.`
      }
    },
    url: {
      type: GqlURL,
      description: `A URL linking to more information about the License.`
    }
  })
})

export const LicenseFilter = createFilter(License)
export const LicenseOrder = createOrder(License)

export const Queries = {
  licenses: {
    type: License,
    description: `Gets a list of Licenses that a Photo can have.`,
    resolve: (parent, args, { licenses }) => licenses.load(`licenses`)
  }
}

export const Definition = License

export default { Definition, Queries }
