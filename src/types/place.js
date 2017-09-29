export const Place = new GqlObject({
  name: `Place`,
  description: `A Flickr Place Object.`,
  fields: () => ({
    name: {
      type: GqlString,
      description: `The Name of the Place, if it has one.`
    },
    id: {
      type: GqlID,
      description: `Flickr Places ID`
    },
    woe: {
      type: GqlID,
      description: `Where on Earth ID`
    },
    lat: {
      type: GqlFloat,
      description: `Latitude value of the Place.`
    },
    lon: {
      type: GqlFloat,
      description: `Longitude value of the Place.`
    },
    url: {
      type: GqlURL,
      description: `A URL linking to the Place on a map.`
    },
    type: {
      type: new GqlEnum({
        name: `PlaceType`,
        values: {
          neighbourhood: {},
          locality: {},
          county: {},
          region: {},
          country: {},
          continent: {}
        }
      }),
      description: `The category of Place this is organized under.`
    },
    timezone: {
      type: GqlString,
      description: `The most local Timezone for this Place. Optional.`
    }
  })
})

export const Queries = {
  getPlaceById: {
    type: Place,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: ``
      }
    }
    //resolve: (parent, args, context) => fetchCamerasByBrand(args.id)
  }
}

export const Definition = Place

export default { Definition, Queries }
