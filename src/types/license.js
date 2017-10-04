export const License = new GqlObject({
  name: `License`,
  description: `A Flickr License Description`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The License' ID.`
    },
    name: {
      type: GqlString,
      description: `The name of the License.`
    },
    url: {
      type: GqlURL,
      description: `A URL linking to more information about the License.`
    }
  })
})

export const Queries = {
  licenses: {
    type: License,
    description: `Gets a list of Licenses that a Photo can have.`,
    resolve: (parent, args, { licenses }) => licenses.load(`licenses`)
  }
}

export const Definition = License

export default { Definition, Queries }
