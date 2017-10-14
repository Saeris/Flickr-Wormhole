import { createFilter, createOrder, Range } from "@/resolvers"
import { Photo } from "./photo"

export const ImageSizes = new GqlEnum({
  name: `ImageSizes`,
  values: {
    Square: {},
    Large_Square: {},
    Thumbnail: {},
    Small: {},
    Small_320: {},
    Medium: {},
    Medium_640: {},
    Medium_800: {},
    Large: {},
    Large_1600: {},
    Large_2048: {},
    Original: {}
  }
})

export const Image = new GqlObject({
  name: `Image`,
  description: `A Flickr Image Object`,
  fields: () => ({
    id: globalId(`Image`),
    photo: {
      type: Photo,
      description: `Rhe Photo this Image is associated with.`,
      complexity: (args, childComplexity) => childComplexity * 5,
      resolve: ({ photoId }, args, { photo }) => photo.load(photoId)
    },
    canBlog: {
      type: GqlBool,
      description: `Flag determining whether the Image can be posted in a Blog or not.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Whether to filter based on if the Image can be Blogged or not.`
      }
    },
    canPrint: {
      type: GqlBool,
      description: `Flag determining whether a Print of the Image can be requested.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Whether to filter based on if the Image can be Printed or not.`
      }
    },
    canDownload: {
      type: GqlBool,
      description: `Flag determining whether the Image can be downloaded or not.`,
      sortable: true,
      filter: {
        type: GqlBool,
        description: `Whether to filter based on if the Image can be Downloaded or not.`
      }
    },
    size: {
      type: ImageSizes,
      description: `The size of the Image.`,
      sortable: true,
      filter: {
        type: new GqlList(ImageSizes),
        description: `A Size or a List of Sizes to fetch.`
      }
    },
    width: {
      type: GqlInt,
      description: `The Width of the Image.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    height: {
      type: GqlInt,
      description: `The Height of the Image.`,
      sortable: true,
      filter: {
        type: Range,
        description: `A value to filter against, or a min and a max value.`
      }
    },
    source: {
      type: GqlURL,
      description: `A URL linking to the Image resource used to display the Image on a page.`
    },
    url: {
      type: GqlURL,
      description: `A URL linking to the Image on Flickr.`
    },
    media: {
      type: GqlString,
      description: `The type of Image resource this is.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A media type or a list of media types.`
      }
    }
  })
})

export const ImageFilter = createFilter(Image)
export const ImageOrder = createOrder(Image)

export const Queries = {
}

export const Definition = Image

export default { Definition, Queries }
