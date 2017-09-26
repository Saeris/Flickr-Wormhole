import { loadCamerasByBrand, loadBrands } from "./loaders"
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
      resolve: async type => await loadBrands.load(`brands`)
        .then(results => results.filter(res => res.id === type.brand)[0]) || null
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
  getCamerasByBrand: {
    type: new GqlList(Camera),
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `A Brand ID used to fetch Cameras of that Brand.`
      }
    },
    resolve: (parent, args, context) => loadCamerasByBrand.load(args.id)
  }
}

export const Definition = Camera

export default { Definition, Queries }
