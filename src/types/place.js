import { createFilter, createOrder } from "@/resolvers"

export const PlaceTypes = new GqlEnum({
  name: `PlaceType`,
  values: {
    neighbourhood: {},
    locality: {},
    county: {},
    region: {},
    country: {},
    continent: {}
  }
})

export const Place = new GqlObject({
  name: `Place`,
  description: `A Flickr Place Object.`,
  fields: () => ({
    id: globalId(`Place`),
    name: {
      type: GqlString,
      description: `The Name of the Place, if it has one.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A name or a list of names.`
      }
    },
    placeId: {
      type: GqlID,
      description: `Flickr Places ID`
    },
    woeId: {
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
      type: PlaceTypes,
      description: `The category of Place this is organized under.`,
      sortable: true,
      filter: {
        type: new GqlList(PlaceTypes),
        description: `A Place Type or a List of Place Types to fetch.`
      }
    },
    timezone: {
      type: GqlString,
      description: `The most local Timezone for this Place. Optional.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A timezone or a list of timezones.`
      }
    }
  })
})

export const PlaceFilter = createFilter(Place)
export const PlaceOrder = createOrder(Place)

export const Queries = {
}

export const Definition = Place

export default { Definition, Queries }
