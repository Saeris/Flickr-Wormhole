export const Image = new GqlObject({
  name: `Image`,
  description: `A Flickr Image Object`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `The ID of the Photo this Image is associated with.`
    },
    canBlog: {
      type: GqlBool,
      description: `Flag determining whether the Image can be posted in a Blog or not.`
    },
    canPrint: {
      type: GqlBool,
      description: `Flag determining whether a Print of the Image can be requested.`
    },
    canDownload: {
      type: GqlBool,
      description: `Flag determining whether the Image can be downloaded or not.`
    },
    label: {
      type: new GqlEnum({
        name: `ImageLabel`,
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
      }),
      description: `A Label describing the size of the photo.`
    },
    width: {
      type: GqlInt,
      description: `The Width of the Image.`
    },
    height: {
      type: GqlInt,
      description: `The Height of the Image.`
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
      description: `The type of Image resource this is.`
    }
  })
})

export const Queries = {
  getImage: {
    type: Image,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: ``
      }
    }
    //resolve: (parent, args, context) => fetchCamerasByBrand(args.id)
  }
}

export const Definition = Image

export default { Definition, Queries }
