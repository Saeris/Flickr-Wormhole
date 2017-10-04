import { Brand } from "./brand"

export const Camera = new GqlObject({
  name: `Camera`,
  description: `A Flickr Camera Object.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The Camera's ID.`
    },
    name: {
      type: GqlString,
      description: `The name of the Camera.`
    },
    brand: {
      type: Brand,
      description: `The Brand of the Camera.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ brand }, args, { brands }) => await brands.load(`brands`)
        .then(results => results.filter(res => res.id === brand)[0]) || null
    },
    megapixels: {
      type: GqlFloat,
      description: `The megapixel count of the Camera, if specified.`
    },
    zoom: {
      type: GqlFloat,
      description: `The zoom factor of the Camera, if specified.`
    },
    lcdSize: {
      type: GqlFloat,
      description: `The size of the Camera's LCD display, if specified.`
    },
    storage: {
      type: new GqlList(GqlString),
      description: `The storage type of the Camera, if specified`
    },
    images: {
      type: new GqlList(GqlURL),
      description: `A list of image URLs depicting the Camera.`
    }
  })
})

export const Queries = {
  cameras: {
    type: new GqlList(Camera),
    description: `Gets a list of Camera models belonging to a particular Brand. Use the 'brands' query to get a list of queriable brands.`,
    args: {
      brand: {
        type: new GqlNonNull(GqlID),
        description: `The ID of the Brand of Cameras to fetch. (Required)`
      }
    },
    resolve: (parent, { brand }, { cameras }) => cameras.load(brand)
  }
}

export const Definition = Camera

export default { Definition, Queries }
